import * as Localization from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import es from './locales/es.json'

const resources = {
  en: { translation: en },
  es: { translation: es },
}

function getDeviceLanguage() {
  // Get the device's language code using Expo Localization
  // Fallback to 'en' if the language code is not found in resources
  const locales = Localization.getLocales()
  const languageCode =
    locales && locales.length > 0 ? locales[0].languageCode ?? 'en' : 'en'
  if (Object.keys(resources).includes(languageCode)) {
    return languageCode
  }
  return 'en'
}

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: getDeviceLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react-native
  },
  react: {
    useSuspense: false, // for react-native
  },
  debug: true, // Uncomment for debugging
})

export default i18n
