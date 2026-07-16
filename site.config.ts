export type GallerySlide = {
  id: string;
  title: string;
  duration: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export type Testimonial = {
  id: string;
  name: string;
  city: string;
  text: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: "paint" | "tiles" | "electric" | "plumb" | "drywall" | "floor" | "bath" | "doors";
};

/** IDs DOM des cartes (doivent correspondre aux ancres href) */
export const contactElementIds = {
  phone: "contacts-phone",
  email: "contacts-email",
} as const;

/** Ancres : défilement fluide vers le bloc contacts et vers un canal précis */
export const contactAnchors = {
  section: "#contacts",
  phone: `#${contactElementIds.phone}`,
  email: `#${contactElementIds.email}`,
} as const;

/** Substitution de `{key}` dans les chaînes de `strings` */
export function fillCopy(template: string, vars: Record<string, string | number>): string {
  let out = template;
  for (const [key, val] of Object.entries(vars)) {
    out = out.split(`{${key}}`).join(String(val));
  }
  return out;
}

export const siteConfig = {
  brandName: "ZS Services",
  brandLogoSrc: "/images/logo.svg",
  brandLogoAlt: "ZS Services",
  city: "Odessa",
  experienceYears: 12,
  warrantyYears: 3,
  completedProjects: 180,
  satisfactionPercent: 94,
  phoneE164: "+33611776492",
  phoneDisplay: "+33 6 11 77 64 92",
  email: "zsservices13@gmail.com",
  serviceArea: "Odessa et jusqu'à 30 km dans la région",
  aboutLead:
    "Je travaille seul : prise de mesures, devis et réalisation des travaux. Pas de marges inutiles « au milieu » — délais et volume fixés avant le début.",
  aboutBody:
    "Spécialisation — appartements et maisons : préparation des murs, carrelage, petits travaux de finition. Je peux montrer des chantiers et donner les contacts d'anciens clients sur demande.",
  masterPhotoSrc: "/images/master-avatar.webp",
  masterPhotoAlt: "Artisan indépendant ZS Services sur un chantier à Odessa",
  examplePhotoSrc: "/images/gallery/example-photo.webp",
  examplePhotoAlt: "Exemple de photo de chantier",

  microTrust: [
    { id: "1", text: "Visite aujourd'hui" },
    { id: "2", text: "Estimation gratuite" },
    { id: "3", text: "Garantie 3 ans" },
  ] as const,

  stats: [
    { id: "exp", label: "Années d'expérience", value: "12+" },
    { id: "obj", label: "Chantiers", value: "180+" },
    { id: "sat", label: "Clients satisfaits", value: "94%" },
    { id: "war", label: "Garantie", value: "3 ans" },
  ] as const,

  services: [
    {
      id: "walls",
      title: "Murs lisses prêts à peindre en 2 jours",
      description: "Enduit, ponçage, sans ondulations à la lumière.",
      icon: "paint",
    },
    {
      id: "tiles",
      title: "Pose de carrelage sans dénivelés",
      description: "Salle de bain, cuisine, couloir — planéité vérifiée au niveau.",
      icon: "tiles",
    },
    {
      id: "electric",
      title: "Remplacement de câblage ponctuel",
      description: "Points lumineux, prises, circuits — livré dans les délais.",
      icon: "electric",
    },
    {
      id: "bath",
      title: "Salle de bain clé en main en 7 jours",
      description: "Étanchéité, carrelage, siphons — sans fuites à la livraison.",
      icon: "bath",
    },
    {
      id: "drywall",
      title: "Cloisons et caissons en plaques de plâtre",
      description: "Angles droits, préparés pour prises et éclairage.",
      icon: "drywall",
    },
    {
      id: "floor",
      title: "Ragréage de sol pour stratifié",
      description: "Chape/enduit coulant — sans grincements ni affaissements.",
      icon: "floor",
    },
    {
      id: "doors",
      title: "Pose de portes en 1 jour",
      description: "Ferme-portes, jeux, finition des huisseries.",
      icon: "doors",
    },
    {
      id: "plumb",
      title: "Robinets et plomberie",
      description: "Raccordement, réinstallation, réparation des fuites.",
      icon: "plumb",
    },
  ] satisfies ServiceItem[],

  gallery: [
    {
      id: "bath",
      title: "Salle de bain",
      duration: "9 jours",
      beforeSrc: "/images/gallery/photo_2026-05-05 15.51.18.webp",
      afterSrc: "/images/gallery/photo_2026-05-05 15.51.21.webp",
      beforeAlt: "Avant : démolition de la salle de bain",
      afterAlt: "Après : carrelage et plomberie",
    },
    {
      id: "bath1",
      title: "Salle de bain",
      duration: "9 jours",
      beforeSrc: "/images/gallery/bath-before.webp",
      afterSrc: "/images/gallery/bath-after.webp",
      beforeAlt: "Avant : démolition de la salle de bain",
      afterAlt: "Après : carrelage et plomberie",
    },
    {
      id: "bath2",
      title: "Salle de bain",
      duration: "9 jours",
      beforeSrc: "/images/gallery/photo_2026-05-05 15.52.31.webp",
      afterSrc: "/images/gallery/photo_2026-05-05 15.52.33.webp",
      beforeAlt: "Avant : démolition de la salle de bain",
      afterAlt: "Après : carrelage et plomberie",
    },
    {
      id: "bath3",
      title: "Salle de bain",
      duration: "9 jours",
      beforeSrc: "/images/gallery/photo_2026-05-05 15.52.40.webp",
      afterSrc: "/images/gallery/photo_2026-05-05 15.52.42.webp",
      beforeAlt: "Avant : démolition de la salle de bain",
      afterAlt: "Après : carrelage et plomberie",
    },
    {
      id: "bath4",
      title: "Salle de bain",
      duration: "9 jours",
      beforeSrc: "/images/gallery/photo_2026-05-05 15.52.45.webp",
      afterSrc: "/images/gallery/photo_2026-05-05 15.52.47.webp",
      beforeAlt: "Avant : démolition de la salle de bain",
      afterAlt: "Après : carrelage et plomberie",
    },
  ] satisfies GallerySlide[],

  testimonials: [
    {
      id: "t1",
      name: "Irina",
      city: "Odessa",
      text: "Couloir et cuisine faits en 10 jours, comme promis. Disponible chaque jour, ils ont enlevé les déchets eux-mêmes.",
    },
    {
      id: "t2",
      name: "Andrei",
      city: "Tchernomorsk",
      text: "Salle de bain sans carrelage de travers. Le devis n'a pas dérapé — j'ai seulement payé les travaux cachés sur la colonne.",
    },
    {
      id: "t3",
      name: "Oksana",
      city: "Odessa",
      text: "Il fallait préparer rapidement pour une location. Il est venu le soir, le lendemain on ponçait déjà.",
    },
  ] satisfies Testimonial[],

  /** Tous les textes utilisateur et UI (le contenu des listes ci-dessus reste dans les données des sections) */
  strings: {
    htmlLang: "fr",

    seo: {
      titleTemplate: "Rénovation d'appartements à {city} en 7–14 jours | {brandName}",
      descriptionTemplate:
        "Artisan indépendant, {experienceYears}+ ans d'expérience. Téléphone {phoneDisplay}, email {email}. {serviceArea}.",
      ogTitleTemplate: "Rénovation d'appartements à {city} en 7–14 jours",
      ogDescriptionTemplate: "Délais et devis avant le début. {phoneDisplay} · {email}",
      ogLocale: "fr_FR",
      ogImageAltTemplate: "{brandName} — rénovation d'appartements",
      twitterTitleTemplate: "Rénovation d'appartements à {city}",
      twitterDescriptionTemplate: "Artisan indépendant, {experienceYears}+ ans. {serviceArea}",
    },

    header: {
      navAriaLabel: "Contacts sur la page",
      phoneIconAriaLabel: "Aller au téléphone dans le bloc contacts",
      emailIconAriaLabel: "Aller à l'email dans le bloc contacts",
      desktopPhone: "Appeler",
      desktopEmail: "Écrire",
    },

    mobileSticky: {
      regionAriaLabel: "Accès rapide aux contacts",
      phone: "Appeler",
      email: "Écrire",
    },

    hero: {
      headlineBeforeCity: "Rénovation d'appartements à",
      headlineAfterCity: "en",
      headlineDuration: "7–14 jours",
      sublineTemplate:
        "Artisan indépendant, {experienceYears}+ ans d'expérience. Devis et délais avant le début des travaux — sans surprises en cours de route.",
      ctaPhone: "Appeler",
      ctaEmail: "Écrire",
    },

    trust: {
      titleBeforeAccent: "Qui fera les travaux :",
      titleAccent: "moi-même",
    },

    services: {
      titleBeforeAccent: "Ce que je fais —",
      titleAccent: "en bref et avec délais",
      subtitle: "Chaque carte — un résultat concret, pas « un peu de tout ».",
    },

    gallery: {
      titleBeforeAccent: "Avant et après",
      titleAccent: "sur de vrais chantiers",
      description:
        "Parcourez les exemples : à gauche l'état avant travaux, à droite — le résultat. Légende et délai pour chaque chantier.",
      labelBefore: "Avant",
      labelAfter: "Après",
      durationPrefix: "Délai :",
    },

    testimonials: {
      titleBeforeAccent: "Avis",
      titleAccent: "avec ville et détails",
      imageAltTemplate: "Photo pour l'avis de {name}",
    },

    repeatCta: {
      title: "Vous voulez la même chose ?",
      body: "Écrivez ce qu'il faut faire et où se trouve le bien — je répondrai avec une estimation de délai et de budget.",
      ctaPhone: "Appeler",
      ctaEmail: "Écrire",
    },

    contacts: {
      titleBeforeAccent: "Contacts et",
      titleAccent: "zone d'intervention",
      introPart1: "Téléphone et email ci-dessous : vous pouvez ",
      introEmphasize1: "simplement consulter",
      introPart2: ", ",
      introEmphasize2: "copier",
      introPart3: " dans le presse-papiers ou ",
      introEmphasize3: "appeler / ouvrir l'email directement",
      introPart4: " — boutons sous chaque contact.",
      phoneChannelLabel: "Téléphone",
      emailChannelLabel: "Email",
      phoneActionLabel: "Appeler",
      emailActionLabel: "Écrire un email",
      areaTitle: "Zone d'intervention",
    },

    contactCard: {
      selectHint: "Vous pouvez sélectionner le texte ou appuyer sur « Copier »",
      copyButton: "Copier",
      copiedButton: "Copié",
      copyAriaLabelTemplate: "Copier {label}",
      copiedAnnounce: "Copié dans le presse-papiers",
    },

    leadForm: {
      titleBeforeAccent: "Laissez une demande —",
      titleAccent: "je vous rappelle",
      subtitle: "Nom et téléphone uniquement. Commentaire — en option.",
      successTitle: "Demande envoyée",
      successBody: "Je vous contacterai bientôt. En cas d'urgence — appelez ou écrivez par email.",
      errorNotConfigured: "Formulaire non configuré : ajoutez NEXT_PUBLIC_FORMSPREE_ID dans .env",
      errorSubmit: "Échec de l'envoi. Appelez ou écrivez par email.",
      errorNetwork: "Réseau indisponible. Écrivez par email ou appelez.",
      labelName: "Nom",
      labelPhone: "Téléphone",
      labelComment: "Commentaire",
      labelCommentOptional: "(facultatif)",
      placeholderName: "Comment vous appeler",
      placeholderPhone: "+33...",
      placeholderMessage: "Quartier, travaux souhaités, horaire préféré",
      submitIdle: "Envoyer la demande",
      submitSending: "Envoi…",
    },

    footer: {
      lineTemplate: "© {year} {brandName}. Rénovation d'appartements à {city}.",
    },
  },
} as const;

export function getTelHref(phoneE164: string): string {
  const cleaned = phoneE164.trim().replace(/\s/g, "");
  if (cleaned.startsWith("tel:")) return cleaned;
  const digits = cleaned.replace(/\D/g, "");
  return `tel:+${digits}`;
}

export function getMailtoHref(email: string): string {
  const trimmed = email.trim();
  if (trimmed.startsWith("mailto:")) return trimmed;
  return `mailto:${trimmed}`;
}
