import { HandHeart, TrendingUp, BookOpen, Globe, Award } from 'lucide-react';

export { programPhotos } from './programPhotos';

export const programPages = {
  'tbm-athletisme': {
    title: 'ATLETISMA',
    badge: 'TBM-ATHLÉTISME',
    accentColor: '#C84B31',
    icon: TrendingUp,
    malagasy: [
      'Klioba Atlétisma izay manosika ireo zaza sahirana mba hitaiza vatana, ka hikendry ny ho lasa lavitra',
      'amin\'ny fifaninana nationaly sy iraisam-pirenena.',
    ],
    french: [
      'Club d\'Athlétisme dédié surtout aux jeunes défavorisés pour une bonne éducation physique.',
      'Le jeune sportif est orienté à persévérer dans une discipline afin de participer à des compétitions internationaux.',
    ],
  },
  'fa-fi-hai': {
    title: 'FA.FI.HAI',
    badge: 'Éducation & Formation',
    accentColor: '#19486A',
    icon: BookOpen,
    malagasy: [
      'Fanampiana amin\'ny FIfampizaràna fahaizana dia tetik\'izay ahitàna fandaharana maro entina manosika ireo manana talenta, na fahaizana miavaka, na traikefa manokana, hivelona amin\'izany.',
    ],
    highlights: [
      {
        title: 'Tenim-pirenena',
        items: ['Mandarin', 'Anglais', 'Français'],
      },
      {
        title: 'Mozika',
        items: ['Fototra', 'Guitare', 'Clavier', 'Valiha', 'Percussions'],
      },
      {
        title: 'Kanto sy kolon-tsaina',
        items: ['Peinture', 'recyclage', 'Art Contemporain'],
      },
    ],
    french: [
      'Cours, ateliers et partage composés de plusieurs programmes :',
    ],
    programs: [
      { title: 'Langue', items: ['Mandarin', 'Anglais', 'Français'] },
      { title: 'Musique', items: ['Fototra', 'Guitare', 'Clavier', 'Valiha', 'Percussions'] },
      { title: 'Arts et cultures', items: ['Peinture', 'recyclage', 'Art Contemporain'] },
    ],
  },
  'zara-aina': {
    title: 'ZARA AINA',
    badge: 'Action sociale',
    accentColor: '#C84B31',
    icon: HandHeart,
    malagasy: [
      'Asa sosialy entina hizàrana fanampiana eny anivon\'ny sekolim-panjakana ambaratonga fototra na vondron\'olona sahirana voafaritra.',
    ],
    french: [
      'Une journée d\'œuvre social visant les écoles primaires publiques ou une communauté de jeunes lors de laquelle nous apportons des activités éducatifs.',
      'Avec les dons collectés par l\'association que ce soit des PPN, des dons alimentaires ou encore des vêtements.',
    ],
  },
  'miz-art': {
    title: "MIZ'ART",
    badge: 'Culture',
    accentColor: '#DDA63A',
    icon: Award,
    malagasy: [
      'Hetsika ara-koltoraly hanomezana sehatra mpanao kanto isan-karazany.',
      'Izany ihany koa ny fanaovana fanangonana farany ny fanampiana zaraina amin\'ny "Zara Aina".',
    ],
    french: [
      'Festival Multiculturel réunissant plusieurs artistes et artisans.',
      'Spectacle et expositions destinés pour l\'exécution de l\'Œuvre social "Zara Aina".',
    ],
  },
  'tour-be-mada': {
    title: 'TOUR BE MADA',
    badge: 'Tourisme durable',
    accentColor: '#0BB9D7',
    icon: Globe,
    malagasy: [
      'Fizahantany lovain-jafy, fitsangatsanganana sy fitsidihana toerana manan-tantara',
      'ahafahana manjifa mivantana ireo vokatry ny vondron\'olona ifotony tsy miankina.',
    ],
    french: [],
  },
};
