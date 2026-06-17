import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PROGRAMS = [
  'tour-be-mada',
  'tbm-athletisme',
  'fa-fi-hai',
  'zara-aina',
  'miz-art',
];

const PHOTOS_PER_PROGRAM = 9;

const FOLDER_PREFIXES = {
  'tour-be-mada': ['tour-be-mada', 'tour_be_mada', 'tourbemada'],
  'tbm-athletisme': ['tbm-athletisme', 'tbm_athletisme', 'atletisma', 'athletisme'],
  'fa-fi-hai': ['fa-fi-hai', 'fa_fi_hai', 'fafihai'],
  'zara-aina': ['zara-aina', 'zara_aina', 'zaraaina'],
  'miz-art': ['miz-art', 'miz_art', 'mizart'],
};

const KEYWORD_RULES = {
  'tour-be-mada': [/DJI_/i, /Travel/i, /_MG_/i, /IMG_/i],
  'tbm-athletisme': [/athlet/i, /sport/i, /IMG_59/i],
  'fa-fi-hai': [/IMG_01/i, /fahaizana/i, /formation/i],
  'zara-aina': [/Collecte/i, /dons/i, /zara/i],
  'miz-art': [/Blue_White/i, /Art/i, /kanto/i],
};

const SAMPLE_PATTERNS = [
  /^samples\//i,
  /^cld-sample/i,
  /^main-sample$/i,
  /^sample$/i,
  /cloudinary-logo/i,
  /cloudinary-icon/i,
  /cloudinary-group/i,
  /imagecon-group/i,
];

function parseCloudinaryUrl(url) {
  const match = url?.match(/cloudinary:\/\/([^:]+):([^@]+)@(.+)/);
  if (!match) return null;
  return { apiKey: match[1], apiSecret: match[2], cloudName: match[3] };
}

function isUserPhoto(publicId) {
  return !SAMPLE_PATTERNS.some((pattern) => pattern.test(publicId));
}

function matchesFolder(publicId, prefixes) {
  const lower = publicId.toLowerCase();
  return prefixes.some((prefix) => lower.startsWith(`${prefix}/`) || lower.startsWith(prefix));
}

function scoreImage(publicId, rules) {
  return rules.reduce((score, rule) => score + (rule.test(publicId) ? 1 : 0), 0);
}

function toPhoto(resource) {
  return {
    publicId: resource.public_id,
    alt: resource.display_name || resource.public_id.split('/').pop(),
    width: resource.width,
    height: resource.height,
  };
}

function assignPhotos(resources) {
  const userPhotos = resources.filter((r) => isUserPhoto(r.public_id));
  const assigned = Object.fromEntries(PROGRAMS.map((slug) => [slug, []]));
  const used = new Set();

  for (const resource of userPhotos) {
    const publicId = resource.public_id;

    for (const slug of PROGRAMS) {
      if (assigned[slug].length >= PHOTOS_PER_PROGRAM) continue;
      if (matchesFolder(publicId, FOLDER_PREFIXES[slug])) {
        assigned[slug].push(toPhoto(resource));
        used.add(publicId);
        break;
      }
    }
  }

  const unassigned = userPhotos.filter((r) => !used.has(r.public_id));

  for (const resource of unassigned) {
    const publicId = resource.public_id;
    const scores = PROGRAMS
      .filter((slug) => assigned[slug].length < PHOTOS_PER_PROGRAM)
      .map((slug) => ({ slug, score: scoreImage(publicId, KEYWORD_RULES[slug]) }))
      .sort((a, b) => b.score - a.score);

    const best = scores.find((entry) => entry.score > 0);
    if (best) {
      assigned[best.slug].push(toPhoto(resource));
      used.add(publicId);
    }
  }

  const remaining = userPhotos.filter((r) => !used.has(r.public_id));
  let poolIndex = 0;

  for (const slug of PROGRAMS) {
    while (assigned[slug].length < PHOTOS_PER_PROGRAM && poolIndex < remaining.length) {
      const resource = remaining[poolIndex++];
      assigned[slug].push(toPhoto(resource));
      used.add(resource.public_id);
    }
  }

  if (userPhotos.length < PROGRAMS.length * PHOTOS_PER_PROGRAM) {
    let cycleIndex = 0;
    for (const slug of PROGRAMS) {
      while (assigned[slug].length < PHOTOS_PER_PROGRAM && userPhotos.length > 0) {
        const resource = userPhotos[cycleIndex % userPhotos.length];
        assigned[slug].push(toPhoto(resource));
        cycleIndex += 1;
      }
    }
  }

  return assigned;
}

async function fetchAllImages(config) {
  const { apiKey, apiSecret, cloudName } = config;
  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
  const resources = [];
  let cursor = null;

  do {
    let apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?max_results=100&sort_by=created_at&direction=desc`;
    if (cursor) apiUrl += `&next_cursor=${encodeURIComponent(cursor)}`;

    const response = await fetch(apiUrl, { headers: { Authorization: `Basic ${auth}` } });
    if (!response.ok) {
      throw new Error(`Cloudinary API error: ${response.status} ${await response.text()}`);
    }

    const data = await response.json();
    resources.push(...(data.resources ?? []));
    cursor = data.next_cursor;
  } while (cursor);

  return resources;
}

const cloudinaryUrl = process.env.CLOUDINARY_URL;
const config = parseCloudinaryUrl(cloudinaryUrl);

if (!config) {
  console.warn('CLOUDINARY_URL not set — keeping existing programPhotos.js');
  process.exit(0);
}

const resources = await fetchAllImages(config);
const userPhotos = resources.filter((r) => isUserPhoto(r.public_id));
const programPhotos = assignPhotos(resources);

const output = `// Auto-generated by scripts/fetch-program-photos.js — do not edit manually
export const programPhotos = ${JSON.stringify(programPhotos, null, 2)};
`;

const outPath = join(__dirname, '../src/data/programPhotos.js');
writeFileSync(outPath, output, 'utf8');

for (const slug of PROGRAMS) {
  console.log(`${slug}: ${programPhotos[slug].length} photos`);
}

console.log(`Saved ${userPhotos.length} user photos from ${resources.length} total Cloudinary images`);
