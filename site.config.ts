export type GallerySlide = {
  id: string;
  title: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description?: string;
  icon: "paint" | "tiles" | "electric" | "plumb" | "drywall" | "floor" | "bath" | "doors" | "spray" | "droplet-off" | "brick-wall" | "house" | "mirror-rectangular" | "paint-bucket" | "square-parking";
};

export type ContentBlock = {
  id: string;
  title: string;
  paragraphs: readonly string[];
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
  brandLogoSrc: "/images/logo-nobg.svg",
  brandLogoAlt: "ZS Services — rénovation et finition à Marseille",
  city: "Marseille",
  phoneE164: "+33611776492",
  phoneDisplay: "+33 6 11 77 64 92",
  email: "zsservices13@gmail.com",
  serviceArea: "Marseille et ces alentours",
  aboutLead:
    "Nous mettons notre expertise au service des particuliers, des professionnels et des collectivités pour réaliser des projets de rénovation et de finition de haute qualité.",
  aboutBody:
    "Basés à Marseille, nous intervenons dans toute la région et accompagnons nos clients à chaque étape de leur projet, de l'étude des besoins jusqu'à la livraison des travaux. Notre priorité est de proposer un travail irréprochable, des finitions soignées et un service fiable, dans le respect des délais, du budget et des normes en vigueur.",
  masterPhotoSrc: "/images/IMG_0284.webp",
  masterPhotoAlt: "ZS Services sur un chantier de rénovation à Marseille",

  microTrust: [
    { id: "1", text: "Professionnalisme et de réactivité" },
    { id: "2", text: "Des finitions haut de gamme" },
    { id: "3", text: "Le respect des délais annoncés" },
    { id: "4", text: "Des solutions adaptées à chaque projet" },
    { id: "5", text: "Devis clairs et transparents" },
    { id: "6", text: "Un interlocuteur unique du début à la fin des travaux" },
  ] as const,

  services: [
    {
      id: "droplet-off",
      title: "Remise en état après dégâts des eaux",
      icon: "droplet-off",
    },
    {
      id: "brick-wall",
      title: "Création de cloisons et de faux plafonds",
      icon: "brick-wall",
    },
    {
      id: "insulation",
      title: "Doublage des murs et isolation",
      icon: "floor",
    },
    {
      id: "prep",
      title: "Préparation des supports enduits, joints, ratissage complet",
      icon: "mirror-rectangular",
    },
    {
      id: "paint",
      title: "Travaux de peinture intérieure et extérieure",
      icon: "paint",
    },
    {
      id: "full-reno",
      title: "Rénovation complète de maisons, appartements, bureaux et commerces",
      icon: "house",
    },
    {
      id: "resin",
      title: "Revêtements techniques en résine époxy et polyuréthane",
      icon: "floor",
    },
    {
      id: "parking",
      title: "Rénovation de parkings souterrains",
      icon: "square-parking",
    },
    {
      id: "spray",
      title: "Marquage au sol, signalisation et systèmes antidérapants",
      icon: "spray",
    },
  ] satisfies ServiceItem[],

  engagement: {
    title: "Notre engagement",
    paragraphs: [
      "Chez ZS Services, chaque projet est réalisé avec rigueur, précision et professionnalisme. Nous sélectionnons des matériaux de qualité et mettons en œuvre des techniques modernes afin de garantir des réalisations durables, esthétiques et conformes aux exigences les plus élevées.",
      "Nous nous engageons à respecter les délais annoncés et à livrer chaque chantier dans les temps, tout en veillant au strict respect des normes en vigueur.",
      "La satisfaction de nos clients est au cœur de notre engagement. Grâce à une communication transparente, un suivi personnalisé et une coordination efficace des différents corps de métier, nous assurons un déroulement fluide des travaux et un résultat à la hauteur des attentes.",
    ],
  } as const,

  specializedBlocks: [
    {
      id: "global",
      title: "Une prise en charge globale de votre projet",
      paragraphs: [
        "Afin de garantir un accompagnement complet, ZS Services s'appuie sur un réseau de partenaires qualifiés, reconnus pour leur expertise dans leurs domaines respectifs.",
        "Selon les besoins de votre projet, nous coordonnons également les interventions d'entreprises spécialisées en électricité, plomberie, chauffage, climatisation, revêtements de sol, menuiserie, serrurerie et autres corps de métier du bâtiment.",
        "Vous bénéficiez ainsi d'un interlocuteur unique tout au long du chantier, tandis que chaque intervention est réalisée par des professionnels expérimentés et qualifiés. Cette organisation nous permet de gérer des projets de rénovation complets, en assurant une parfaite coordination entre les différents métiers et un niveau de qualité constant.",
      ],
    },
  ] satisfies readonly ContentBlock[],

  gallery: [
    {
      id: "chocolaterie",
      title: "Rénovation de la façade d’une chocolaterie",
      beforeSrc: "/images/gallery/photo_2026-05-05 15.51.18.webp",
      afterSrc: "/images/gallery/photo_2026-05-05 15.51.21.webp",
      beforeAlt: "Avant : façade à rénover",
      afterAlt: "Après : façade rénovée",
    },
    {
      id: "salle",
      title: "Rénovation d’une salle de bain",
      beforeSrc: "/images/gallery/bath-before.webp",
      afterSrc: "/images/gallery/bath-after.webp",
      beforeAlt: "Avant : salle de bain à rénover",
      afterAlt: "Après : salle de bain rénovée",
    },
    {
      id: "musee",
      title: "Peinture à la chaux Musée Provincial Château Gombert",
      beforeSrc: "/images/gallery/photo_2026-05-05 15.52.31.webp",
      afterSrc: "/images/gallery/photo_2026-05-05 15.52.33.webp",
      beforeAlt: "Avant : espace commercial à rénover",
      afterAlt: "Après : espace commercial rénové",
    },
    {
      id: "sport",
      title: "Remise en état d’une salle de sport après dégât des eaux",
      beforeSrc: "/images/gallery/photo_2026-05-05 15.52.40.webp",
      afterSrc: "/images/gallery/photo_2026-05-05 15.52.42.webp",
      beforeAlt: "Avant : salle de sport à rénover",
      afterAlt: "Après : salle de sport rénovée",
    },
    {
      id: "devanture",
      title: "Rénovation de la devanture d’une boutique",
      beforeSrc: "/images/gallery/photo_2026-05-05 15.52.45.webp",
      afterSrc: "/images/gallery/photo_2026-05-05 15.52.47.webp",
      beforeAlt: "Avant : devanture à rénover",
      afterAlt: "Après : devanture rénovée",
    },
    {
      id: "appartement",
      title: "Rénovation d’un appartement",
      beforeSrc: "/images/gallery/IMG_5777.webp",
      afterSrc: "/images/gallery/IMG_8075.webp",
      beforeAlt: "Avant : appartement à rénover",
      afterAlt: "Après : appartement rénové",
    },
    {
      id: "cloture",
      title: "Enduisage du soubassement d’une clôture",
      beforeSrc: "/images/gallery/IMG_1809.webp",
      afterSrc: "/images/gallery/IMG_1810.webp",
      beforeAlt: "Avant : clôture à rénover",
      afterAlt: "Après : clôture rénovée",
    },
    {
      id: "etageres",
      title: "Création des étagères un plaques de plâtre",
      beforeSrc: "/images/gallery/IMG_0878.webp",
      afterSrc: "/images/gallery/IMG_0887.webp",
      beforeAlt: "Avant : étagères à rénover",
      afterAlt: "Après : étagères rénovées",
    },
  ] satisfies GallerySlide[],

  /** Tous les textes utilisateur et UI (le contenu des listes ci-dessus reste dans les données des sections) */
  strings: {
    htmlLang: "fr",

    seo: {
      titleTemplate:
        "{brandName} – Votre partenaire de confiance pour tous vos projets de rénovation",
      descriptionTemplate:
        "Chez ZS Services, nous mettons notre expertise au service des particuliers, des professionnels et des collectivités pour réaliser des projets de rénovation et de finition de haute qualité. {serviceArea}. {phoneDisplay} · {email}",
      ogTitleTemplate: "ZS Services, l'excellence au service de vos projets.",
      ogDescriptionTemplate:
        "Basés à Marseille, nous intervenons dans toute la région et accompagnons nos clients à chaque étape de leur projet, de l'étude des besoins jusqu'à la livraison des travaux. {phoneDisplay} · {email}",
      ogLocale: "fr_FR",
      ogImageAltTemplate: "{brandName} — rénovation et finition à {city}",
      twitterTitleTemplate:
        "{brandName} – Votre partenaire de confiance pour tous vos projets de rénovation",
      twitterDescriptionTemplate:
        "Chez ZS Services, nous mettons notre expertise au service des particuliers, des professionnels et des collectivités. {serviceArea}.",
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
      headline: "ZS Services – Votre partenaire de confiance pour tous vos projets de rénovation",
      whyChooseTitle: "Pourquoi choisir ZS Services?",
      ctaPhone: "Appeler",
      ctaEmail: "Demander un devis",
    },

    services: {
      titleBeforeAccent: "Nos domaines",
      titleAccent: "d'intervention",
      subtitle: "Nous proposons une large gamme de prestations dans le secteur du bâtiment :",
    },

    gallery: {
      titleBeforeAccent: "Avant / après",
      titleAccent: "sur nos chantiers",
      description: "Parcourez nos réalisations.",
      labelBefore: "Avant",
      labelAfter: "Après",
      durationPrefix: "Délai :",
    },

    repeatCta: {
      title: "Construisons votre projet ensemble",
      body: "Que vous souhaitiez rénover un appartement, transformer un local commercial, rénover un parking ou réaliser des travaux de plâtrerie et de peinture, ZS Services vous accompagne avec le même niveau d'exigence et de qualité.",
      tagline: "ZS Services, l'excellence au service de vos projets.",
      ctaPhone: "Appeler",
      ctaEmail: "Demander un devis",
    },

    contacts: {
      titleBeforeAccent: "Contacts",
      titleAccent: "zone d'intervention",
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
      titleAccent: "nous vous recontactons",
      subtitle: "Nom et téléphone uniquement. Décrivez votre projet en commentaire — en option.",
      successTitle: "Demande envoyée",
      successBody: "Nous vous contacterons rapidement. En cas d'urgence — appelez ou écrivez par email.",
      errorNotConfigured: "Formulaire non configuré : ajoutez NEXT_PUBLIC_FORMSPREE_ID dans .env",
      errorSubmit: "Échec de l'envoi. Appelez ou écrivez par email.",
      errorNetwork: "Réseau indisponible. Écrivez par email ou appelez.",
      labelName: "Nom",
      labelPhone: "Téléphone",
      labelComment: "Commentaire",
      labelCommentOptional: "(facultatif)",
      placeholderName: "Votre nom",
      placeholderPhone: "+33...",
      placeholderMessage: "Type de travaux, adresse, délai souhaité",
      submitIdle: "Envoyer la demande",
      submitSending: "Envoi…",
    },

    footer: {
      lineTemplate: "© {year} {brandName}. ZS Services, l'excellence au service de vos projets.",
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
