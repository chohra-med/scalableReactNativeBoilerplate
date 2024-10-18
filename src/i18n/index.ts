import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import newLineProcessor from './newLineProcessor';

//Languages
import ArabicTranslation from './ar_SA';
import EnglishTranslation from './en_GB';
import FrenchTranslation from './fr_FR';

export const FALLBACK_LOCALE = 'en-UK';

i18n
  .use(initReactI18next)
  .use(newLineProcessor)
  .init({
    resources: {
      'en-UK': EnglishTranslation,
      'fr-FR': FrenchTranslation,
      'ar-SA': ArabicTranslation,
    },
    ns: [
      'common',
      ...Object.keys(EnglishTranslation),
      ...Object.keys(FrenchTranslation),
      ...Object.keys(ArabicTranslation),
    ],
    defaultNS: 'common',
    debug: __DEV__,
    fallbackLng: FALLBACK_LOCALE,
    returnEmptyString: false, // empty string of a key-value -> fallback langauge
    returnNull: false,
    lng: FALLBACK_LOCALE, // initial language before manual detection
    postProcess: ['newLineProcessor'], // always one this postProcess
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3', // for v21+
  });

export default i18n;
