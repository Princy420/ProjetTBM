const url = process.env.CLOUDINARY_URL;
const m = url?.match(/cloudinary:\/\/([^:]+):([^@]+)@(.+)/);
if (!m) { console.error('No CLOUDINARY_URL'); process.exit(1); }
const auth = Buffer.from(`${m[1]}:${m[2]}`).toString('base64');
const cloud = m[3];
const ctrl = new AbortController();
setTimeout(() => ctrl.abort(), 15000);
const r = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/resources/image?max_results=100&sort_by=created_at&direction=desc`, {
  headers: { Authorization: `Basic ${auth}` },
  signal: ctrl.signal,
});
const d = await r.json();
if (d.error) { console.error(d); process.exit(1); }
const today = new Date().toISOString().slice(0, 10);
const todayPhotos = (d.resources ?? []).filter((x) => x.created_at.startsWith(today));
console.log('cloud', cloud, 'total', d.resources?.length, 'today', todayPhotos.length, 'date', today);
for (const p of todayPhotos) console.log(p.public_id, p.created_at);
