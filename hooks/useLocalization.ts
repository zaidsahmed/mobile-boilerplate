import { useTranslation } from 'react-i18next'

export const useLocalization = () => {
  const { t, i18n: i18nInstance } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18nInstance.changeLanguage(lng)
  }

  return {
    t,
    currentLanguage: i18nInstance.language,
    changeLanguage,
  }
}
