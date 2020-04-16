// the lang (e.g. 'en-US') is globally accessible in components via `this.$lang`
// it should be specified in the front matter of every markdown page:
// https://vuepress.vuejs.org/guide/markdown.html#front-matter

// String translations are imported from a `strings.json` file within each lang directory.
// This is to make the files compatible with CrowdIn & easily exportable/uploadable.
const english = require('../../../strings.json')
const ar = require('../../../translations/ar/strings.json')
const bn = require('../../../translations/bn/strings.json')
const cs = require('../../../translations/cs/strings.json')
const de = require('../../../translations/de/strings.json')
const el = require('../../../translations/el/strings.json')
const spanishModern = require('../../../translations/es/strings.json')
const fa = require('../../../translations/fa/strings.json')
const fr = require('../../../translations/fr/strings.json')
const id = require('../../../translations/id/strings.json')
const ig = require('../../../translations/ig/strings.json')
const it = require('../../../translations/it/strings.json')
const ja = require('../../../translations/ja/strings.json')
const ko = require('../../../translations/ko/strings.json')
const nl = require('../../../translations/nl/strings.json')
const pl = require('../../../translations/pl/strings.json')
const portugueseBrazilian = require('../../../translations/pt-br/strings.json')
const ro = require('../../../translations/ro/strings.json')
const ru = require('../../../translations/ru/strings.json')
const sk = require('../../../translations/sk/strings.json')
const sl = require('../../../translations/sl/strings.json')
const se = require('../../../translations/se/strings.json')
const tr = require('../../../translations/tr/strings.json')
const simplifiedChinese = require('../../../translations/zh/strings.json')

// These lang keys should match the equivalent CrowdIn translation page
// e.g. `es-EM` --> https://crowdin.com/project/ethereumfoundation/es-EM
// e.g. `nl` --> https://crowdin.com/project/ethereumfoundation/nl
const stringTranslations = {
  'en-US': english,
  'ar-AR': ar,
  'bn-BD': bn,
  cs,
  'de-DE': de,
  el,
  'es-EM': spanishModern,
  fa,
  'fr-FR': fr,
  'id-ID': id,
  ig,
  it,
  ja,
  ko,
  nl,
  pl,
  'pt-BR': portugueseBrazilian,
  'ro-RO': ro,
  ru,
  sk,
  sl,
  'sv-SE': se,
  tr,
  'zh-CN': simplifiedChinese
}

// These lang keys should match `stringTranslations` keys
// TODO add contentVersion key to each lang, e.g. for HomePage display logic
const languageMetaData = {
  'en-US': {
    version: 1.2,
    language: 'English',
    'language-english': 'English',
    path: '/'
  },
  'ar-AR': {
    version: 1.1,
    language: 'العربية',
    'language-english': 'Arabic',
    path: '/ar/'
  },
  'bn-BD': {
    version: 1.1,
    language: 'বাংলা',
    'language-english': 'Bengali',
    path: '/bn/'
  },
  cs: {
    version: 1.0,
    language: 'čeština',
    'language-english': 'Czech',
    path: '/cs/'
  },
  'de-DE': {
    version: 1.1,
    language: 'Deutsch',
    'language-english': 'German',
    path: '/de/'
  },
  el: {
    version: 1.0,
    language: 'Ελληνικά',
    'language-english': 'Greek',
    path: '/el/'
  },
  'es-EM': {
    version: 1.0,
    language: 'Español',
    'language-english': 'Spanish',
    path: '/es/'
  },
  fa: {
    version: 1.0,
    language: 'فارسی',
    'language-english': 'Farsi',
    path: '/fa/'
  },
  'fr-FR': {
    version: 1.1,
    language: 'Français',
    'language-english': 'French',
    path: '/fr/'
  },
  'id-ID': {
    version: 1.1,
    language: 'Bahasa Indonesia',
    'language-english': 'Indonesian',
    path: '/id/'
  },
  ig: {
    version: 1.0,
    language: 'Ibo',
    'language-english': 'Igbo',
    path: '/ig/'
  },
  it: {
    version: 1.0,
    language: 'Italiano',
    'language-english': 'Italian',
    path: '/it/'
  },
  ja: {
    version: 1.0,
    language: '日本語',
    'language-english': 'Japanese',
    path: '/ja/'
  },
  ko: {
    version: 1.0,
    language: '한국어',
    'language-english': 'Korean',
    path: '/ko/'
  },
  nl: {
    version: 1.0,
    language: 'Nederlands',
    'language-english': 'Dutch',
    path: '/nl/'
  },
  pl: {
    version: 1.0,
    language: 'Polski',
    'language-english': 'Polish',
    path: '/pl/'
  },
  'pt-BR': {
    version: 1.0,
    language: 'Português',
    'language-english': 'Portuguese (Brazilian)',
    path: '/pt-br/'
  },
  ru: {
    version: 1.0,
    language: 'Pусский',
    'language-english': 'Russian',
    path: '/ru/'
  },
  sk: {
    version: 1.1,
    language: 'Slovenský',
    'language-english': 'Slovak',
    path: '/sk/'
  },
  sl: {
    version: 1.0,
    language: 'Slovenija',
    'language-english': 'Slovenian',
    path: '/sl/'
  },
  'ro-RO': {
    version: 1.1,
    language: 'Română',
    'language-english': 'Romanian',
    path: '/ro/'
  },
  'sv-SE': {
    version: 1.1,
    language: 'Svenska',
    'language-english': 'Swedish',
    path: '/se/'
  },
  tr: {
    version: 1.1,
    language: 'Türk',
    'language-english': 'Turkish',
    path: '/tr/'
  },
  'zh-CN': {
    version: 1.0,
    language: '简体中文',
    'language-english': 'Chinese Simplified',
    path: '/zh/'
  }
}

// Merge stringTranslations & languageMetaData
let translations = {}
for (const lang in stringTranslations) {
  const langTranslationsAndMeta = Object.assign(
    {},
    stringTranslations[lang],
    languageMetaData[lang]
  )
  translations[lang] = langTranslationsAndMeta
}

const translate = (lookup, lang = 'en-US') => {
  const translation = translations[lang][lookup]
  if (translation === undefined && lang === 'en-US') {
    console.error(`No key for "${lookup}" in strings.json`)
  } else if (translation === undefined) {
    console.warn(
      `No translation for "${lookup}" on lang "${lang}", falling back to English"`
    )
    return translate(lookup)
  }
  return translation || ''
}

module.exports = {
  translate,
  translations
}
