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

/** DOM id карточек (должны совпадать с href якорей) */
export const contactElementIds = {
  phone: "contacts-phone",
  email: "contacts-email",
} as const;

/** Якоря: плавный скролл к блоку контактов и к конкретному каналу */
export const contactAnchors = {
  section: "#contacts",
  phone: `#${contactElementIds.phone}`,
  email: `#${contactElementIds.email}`,
} as const;

/** Подстановка `{key}` в строках из `strings` */
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
  brandLogoText: "SERVICES",
  city: "Одессе",
  experienceYears: 12,
  warrantyYears: 3,
  completedProjects: 180,
  satisfactionPercent: 94,
  phoneE164: "+33611776492",
  phoneDisplay: "+33 6 11 77 64 92",
  email: "zsservices13@gmail.com",
  serviceArea: "Одесса и до 30 км по области",
  aboutLead:
    "Работаю сам: замер, смета и делаю ремонт. Без лишних «наценок посередине» — сроки и объём фиксируем до старта.",
  aboutBody:
    "Специализация — квартиры и дома: подготовка стен, плитка, мелкие отделочные работы. Покажу объекты и дам контакты прошлых заказчиков по запросу.",
  masterPhotoSrc: "/images/master-avatar.jpeg",
  masterPhotoAlt: "Частный мастер ZS Services на объекте в Одессе",
  examplePhotoSrc: "/images/gallery/example-photo.jpg",
  examplePhotoAlt: "Пример фотографии объекта",

  microTrust: [
    { id: "1", text: "Выезд сегодня" },
    { id: "2", text: "Бесплатная оценка" },
    { id: "3", text: "Гарантия 3 года" },
  ] as const,

  stats: [
    { id: "exp", label: "Лет опыта", value: "12+" },
    { id: "obj", label: "Объектов", value: "180+" },
    { id: "sat", label: "Довольных клиентов", value: "94%" },
    { id: "war", label: "Гарантия", value: "3 года" },
  ] as const,

  services: [
    {
      id: "walls",
      title: "Ровные стены под покраску за 2 дня",
      description: "Шпаклёвка, шлифовка, без волны на свету.",
      icon: "paint",
    },
    {
      id: "tiles",
      title: "Укладка плитки без перепадов",
      description: "Ванна, кухня, коридор — плоскость проверяю правилом.",
      icon: "tiles",
    },
    {
      id: "electric",
      title: "Замена проводки точечно",
      description: "Точки света, розетки, группы — с укладкой в срок.",
      icon: "electric",
    },
    {
      id: "bath",
      title: "Санузел под ключ за 7 дней",
      description: "Гидроизоляция, плитка, сифоны — без протечек на сдаче.",
      icon: "bath",
    },
    {
      id: "drywall",
      title: "Перегородки и короба из ГКЛ",
      description: "Ровные углы, под розетки и подсветку.",
      icon: "drywall",
    },
    {
      id: "floor",
      title: "Выравнивание пола под ламинат",
      description: "Стяжка/наливной пол — без скрипа и прогибов.",
      icon: "floor",
    },
    {
      id: "doors",
      title: "Установка дверей за 1 день",
      description: "Доводчики, зазоры, отделка откосов.",
      icon: "doors",
    },
    {
      id: "plumb",
      title: "Смесители и сантехника",
      description: "Подключение, переустановка, устранение течей.",
      icon: "plumb",
    },
  ] satisfies ServiceItem[],

  gallery: [
    {
      id: "bath",
      title: "Санузел",
      duration: "9 дней",
      beforeSrc: "/images/gallery/photo_2026-05-05 15.51.18.jpeg",
      afterSrc: "/images/gallery/photo_2026-05-05 15.51.21.jpeg",
      beforeAlt: "До: демонтаж санузла",
      afterAlt: "После: плитка и сантехника",
    },
    {
      id: "bath1",
      title: "Санузел",
      duration: "9 дней",
      beforeSrc: "/images/gallery/bath-before.jpeg",
      afterSrc: "/images/gallery/bath-after.jpeg",
      beforeAlt: "До: демонтаж санузла",
      afterAlt: "После: плитка и сантехника",
    },
    {
      id: "bath2",
      title: "Санузел",
      duration: "9 дней",
      beforeSrc: "/images/gallery/photo_2026-05-05 15.52.31.jpeg",
      afterSrc: "/images/gallery/photo_2026-05-05 15.52.33.jpeg",
      beforeAlt: "До: демонтаж санузла",
      afterAlt: "После: плитка и сантехника",
    },
    {
      id: "bath3",
      title: "Санузел",
      duration: "9 дней",
      beforeSrc: "/images/gallery/photo_2026-05-05 15.52.40.jpeg",
      afterSrc: "/images/gallery/photo_2026-05-05 15.52.42.jpeg",
      beforeAlt: "До: демонтаж санузла",
      afterAlt: "После: плитка и сантехника",
    },
    {
      id: "bath4",
      title: "Санузел",
      duration: "9 дней",
      beforeSrc: "/images/gallery/photo_2026-05-05 15.52.45.jpeg",
      afterSrc: "/images/gallery/photo_2026-05-05 15.52.47.jpeg",
      beforeAlt: "До: демонтаж санузла",
      afterAlt: "После: плитка и сантехника",
    },
  ] satisfies GallerySlide[],

  testimonials: [
    {
      id: "t1",
      name: "Ирина",
      city: "Одесса",
      text: "Сделали коридор и кухню за 10 дней, как обещали. На связи был каждый день, мусор вынесли сами.",
    },
    {
      id: "t2",
      name: "Андрей",
      city: "Черноморск",
      text: "Санузел без перекосов плитки. Смета не расползлась — доплатил только за скрытые работы по стояку.",
    },
    {
      id: "t3",
      name: "Оксана",
      city: "Одесса",
      text: "Нужно было срочно подготовить под съём. Приехал вечером, на следующий день уже шлифовали.",
    },
  ] satisfies Testimonial[],

  /** Все пользовательские и UI-тексты (кроме контента списков выше — он остаётся в данных секций) */
  strings: {
    htmlLang: "ru",

    seo: {
      titleTemplate: "Ремонт квартир в {city} за 7–14 дней | {brandName}",
      descriptionTemplate:
        "Частный мастер, {experienceYears}+ лет опыта. Телефон {phoneDisplay}, email {email}. {serviceArea}.",
      ogTitleTemplate: "Ремонт квартир в {city} за 7–14 дней",
      ogDescriptionTemplate: "Сроки и смета до старта. {phoneDisplay} · {email}",
      ogLocale: "ru_RU",
      ogImageAltTemplate: "{brandName} — ремонт квартир",
      twitterTitleTemplate: "Ремонт квартир в {city}",
      twitterDescriptionTemplate: "Частный мастер, {experienceYears}+ лет. {serviceArea}",
    },

    header: {
      navAriaLabel: "Контакты на странице",
      phoneIconAriaLabel: "Перейти к телефону в блоке контактов",
      emailIconAriaLabel: "Перейти к email в блоке контактов",
      desktopPhone: "Позвонить",
      desktopEmail: "Написать",
    },

    mobileSticky: {
      regionAriaLabel: "Быстрый переход к контактам",
      phone: "Позвонить",
      email: "Написать",
    },

    hero: {
      headlineBeforeCity: "Ремонт квартир в",
      headlineAfterCity: "за",
      headlineDuration: "7–14 дней",
      sublineTemplate:
        "Частный мастер, опыт {experienceYears}+ лет. Смета и сроки до начала работ — без сюрпризов в процессе.",
      ctaPhone: "Позвонить",
      ctaEmail: "Написать",
    },

    trust: {
      titleBeforeAccent: "Кто будет делать ремонт:",
      titleAccent: "я сам",
    },

    services: {
      titleBeforeAccent: "Что делаю —",
      titleAccent: "коротко и с сроками",
      subtitle: "Каждая карточка — конкретный результат, не «всё подряд».",
    },

    gallery: {
      titleBeforeAccent: "До и после",
      titleAccent: "на реальных объектах",
      description:
        "Листайте примеры: слева состояние до работ, справа — результат. Подпись и срок по каждому объекту.",
      labelBefore: "До",
      labelAfter: "После",
      durationPrefix: "Срок:",
    },

    testimonials: {
      titleBeforeAccent: "Отзывы",
      titleAccent: "с городом и деталями",
      imageAltTemplate: "Фото к отзыву {name}",
    },

    repeatCta: {
      title: "Хотите так же?",
      body: "Напишите, что нужно сделать и где объект — отвечу с ориентиром по сроку и бюджету.",
      ctaPhone: "Позвонить",
      ctaEmail: "Написать",
    },

    contacts: {
      titleBeforeAccent: "Контакты и",
      titleAccent: "зона работ",
      introPart1: "Телефон и почта ниже: можно ",
      introEmphasize1: "просто посмотреть",
      introPart2: ", ",
      introEmphasize2: "скопировать",
      introPart3: " в буфер или ",
      introEmphasize3: "сразу позвонить / открыть почту",
      introPart4: " — кнопки под каждым контактом.",
      phoneChannelLabel: "Телефон",
      emailChannelLabel: "Email",
      phoneActionLabel: "Позвонить",
      emailActionLabel: "Написать письмо",
      areaTitle: "Зона работы",
    },

    contactCard: {
      selectHint: "Можно выделить текст или нажать «Скопировать»",
      copyButton: "Скопировать",
      copiedButton: "Скопировано",
      copyAriaLabelTemplate: "Скопировать {label}",
      copiedAnnounce: "Скопировано в буфер обмена",
    },

    leadForm: {
      titleBeforeAccent: "Оставьте заявку —",
      titleAccent: "перезвоню",
      subtitle: "Только имя и телефон. Комментарий — по желанию.",
      successTitle: "Заявка отправлена",
      successBody: "Свяжусь в ближайшее время. Если срочно — позвоните или напишите на email.",
      errorNotConfigured: "Форма не настроена: добавьте NEXT_PUBLIC_FORMSPREE_ID в .env",
      errorSubmit: "Не удалось отправить. Позвоните или напишите на почту.",
      errorNetwork: "Сеть недоступна. Напишите на почту или позвоните.",
      labelName: "Имя",
      labelPhone: "Телефон",
      labelComment: "Комментарий",
      labelCommentOptional: "(необязательно)",
      placeholderName: "Как к вам обращаться",
      placeholderPhone: "+33...",
      placeholderMessage: "Район, что нужно сделать, удобное время",
      submitIdle: "Отправить заявку",
      submitSending: "Отправка…",
    },

    footer: {
      lineTemplate: "© {year} {brandName}. Ремонт квартир в {city}.",
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
