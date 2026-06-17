// src/data/index.js
import {
  Target, Heart, BookOpen, Users, Globe, Leaf, Building,
  HandHeart, TrendingUp, Recycle, Camera, Shirt, Award,
  Volleyball
} from 'lucide-react';

export const sdgData = [
  { id: 1,  title: "Pas de pauvreté",    color: "#E5243B", icon: Target   },
  { id: 2,  title: "Faim Zéro",          color: "#DDA63A", icon: Heart    },
  {id: 3, title:"Bonne santé et bien-être", color:"#4C9F38", icon: Volleyball},
  { id: 4,  title: "Éducation de qualité", color: "#C5192D", icon: BookOpen },
  { id: 5,  title: "Égalité des sexes",  color: "#FF3A21", icon: Users    },
  {id:12, title: "Tourisme durable et projet recyclage", color:"#6A3A9A", icon: Camera   },
  { id: 14, title: "Vie aquatique",      color: "#0BB9D7", icon: Globe    },
  { id: 15, title: "Vie terrestre",      color: "#3EB049", icon: Leaf     },
  { id: 17, title: "Partenariats",       color: "#19486A", icon: Building },
];

export const programsData = [
  {
    id: 1,
    name: "ZARA AINA",
    categories: ["Social"],
    description: "Aide alimentaire et produits de nécessité pour les communautés vulnérables.",
    icon: HandHeart,
    link: "/programme/zara-aina",
    linkLabel: "Voir la galerie",
  },
  {
    id: 2,
    name: "TBM-ATHLÉTISME",
    categories: ["Social", "Culture"],
    description: "Sport et dépassement de soi pour la jeunesse malagasy.",
    icon: TrendingUp,
    link: "/programme/tbm-athletisme",
    linkLabel: "Voir la galerie",
  },
  {
    id: 3,
    name: "FA.FI.HAI.",
    categories: ["Éducation/Formation"],
    description: "Communication et partage de connaissances pour tous.",
    icon: BookOpen,
    link: "/programme/fa-fi-hai",
    linkLabel: "Voir la galerie",
  },
  {
    id: 4,
    name: "TOUR BE MADA",
    categories: ["Tourisme"],
    description: "Tourisme durable et solidaire à Madagascar.",
    icon: Globe,
    link: "/programme/tour-be-mada",
    linkLabel: "Voir la galerie",
  },
  {
    id: 5,
    name: "TSO.TRA",
    categories: ["Environnement"],
    description: "Tri sélectif et compostage pour un environnement propre.",
    icon: Recycle,
  },
  {
    id: 6,
    name: "ART'RAOTY",
    categories: ["Environnement"],
    description: "Recyclage artistique et créatif au service de l'environnement.",
    icon: Camera,
  },
  {
    id: 7,
    name: "MALAGASY PRINT&CO",
    categories: ["Éducation/Formation"],
    description: "Formation et création d'emplois dans la confection et la sérigraphie",
    icon: Shirt,
  },
  {
    id: 8,
    name: "MIZ'ART",
    categories: ["Culture"],
    description: "(Festival multiculturel), CDC « Cultural and Development Center »",
    icon: Award,
    link: "/programme/miz-art",
    linkLabel: "Voir la galerie",
  },
  {
    id: 9,
    name: "CDC « Cultural and Development Center »",
    categories: ["Culture"],
    description: "Centre de développement culturel pour la promotion des arts et de la culture malagasy.",
    icon: Award,
  },
  {
    id: 10,
    name: "SALON DE MASSAGE",
    description: "Bien-être et relaxation pour tous les membres de la communauté.",
    categories: ["Bien-être"],
    icon: HandHeart,
  },
  {
    id: 11,
    name: "CLUB ATHLETISME",
    description: "Promotion du sport et de l'activité physique pour la santé et le bien-être.(Motivation, Persévérance, Esprit d’équipe)",
    categories: ["Bien-être"],
    icon: Volleyball,
  }
];

export const timelineData = [
  {
    year: "2023",
    title: "Fondation",
    description:
      "Création de TOKONTANY BE MALAGASY avec la vision d'un impact social durable ancré dans les valeurs malgaches.",
  },
  {
    year: "2024",
    title: "Expansion",
    description:
      "Lancement des premiers programmes sociaux et écologiques dans plusieurs régions de Madagascar.",
  },
  {
    year: "2025",
    title: "Consolidation",
    description:
      "Renforcement des partenariats stratégiques et élargissement significatif de notre portée communautaire.",
  },
];

export const valuesData = [
  {
    title: "FIHAVANANA",
    description:
      "Le lien social et la solidarité au cœur de notre action communautaire, inspiré de la tradition malgache.",
    icon: Heart,
  },
  {
    title: "Engagement",
    description:
      "Une détermination sans faille pour construire un avenir meilleur et durable à Madagascar.",
    icon: Award,
  },
  {
    title: "Inclusion",
    description:
      "L'accessibilité et l'équité pour chaque membre de notre communauté, sans distinction.",
    icon: Users,
  },
];

export const categories = ["Tous", "Social", "Tourisme", "Éducation/Formation","Environnement", "Culture","Bien-être"];

export const categoryColors = {
  Social:    "#C84B31",
  Environnement:  "#3EB049",
  "Éducation/Formation": "#19486A",
  Culture:   "#DDA63A",
  "Bien-être": "#C5192D",
  Tourisme: "#0BB9D7",
};

export const navLinks = [
  { name: "Accueil",    sectionId: "accueil"    },
  { name: "Missions",   sectionId: "missions"   },
  { name: "Programmes", sectionId: "programmes" },
  { name: "Parcours",   sectionId: "parcours"   },
  { name: "Valeurs",    sectionId: "valeurs"    },
  { name: "Contact",    sectionId: "contact"    },
];