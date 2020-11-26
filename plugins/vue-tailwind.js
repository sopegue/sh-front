import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import English from 'vue-tailwind/dist/l10n/index'
import Spanish from 'vue-tailwind/dist/l10n/es'
import Mandarin from 'vue-tailwind/dist/l10n/zh'
import Japanese from 'vue-tailwind/dist/l10n/ja'
import French from 'vue-tailwind/dist/l10n/fr'

const settings = {
  // TInput: {...},
  // ...,
  TDatepicker: {
    // classes: {...},
    // fixedClasses: {...},
    locales: {
      en: English,
      es: Spanish,
      zh: Mandarin,
      ja: Japanese,
      fr: French,
    },
    // Optionally define the default language
    lang: 'en',
  },
}

Vue.use(VueTailwind, settings)
