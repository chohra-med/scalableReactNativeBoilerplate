// A list of support languages is not mantained in the backend so we mantain one here.
// Web have a similar list here: https://github.com/coachhubio/ch-web.frontend/blob/44fb3d2553a8addf527e2f237ebb89e346a9d3f3/src/constants/languageLabelsDictionary.js
// General english labels are provided for the case that a label must be found with only the first two letters of the language code
// e.g. findLanguageLabel('pt') could return Brazilian Portuguese and Portugal Portuguese but we do not know the region so we simply return, Portuguese.

interface Language {
    value: string;
    label: string;
    engLabel: string;
    generalEngLabel: string;
    isRTL: boolean;
  }
  
  export const allLanguages: Language[] = [
   
    {
      value: 'en_GB',
      label: 'English',
      engLabel: 'English',
      generalEngLabel: 'English',
      isRTL: false,
    },
    {
      value: 'fr_FR',
      label: 'Français',
      engLabel: 'French',
      generalEngLabel: 'French',
      isRTL: false,
    },
    {
      value: 'ar_SA',
      label: 'العربية',
      engLabel: 'Arabic',
      generalEngLabel: 'Arabic',
      isRTL: true,
    },
  ];
  
  export const findLanguageLabel = (languageKey: string): string => {
    let languageLabel = '';
    allLanguages.forEach((language: Language) => {
      if (language.value.match(languageKey.substring(0, 2))) {
        languageLabel = language.label || language.engLabel;
      }
    });
    if (!languageLabel) {
      console.error(`No language was found to match the key ${languageKey}`);
    }
    return languageLabel;
  };
  
  export const isRtlLanguage = (languageKey: string): boolean => {
    let isRTL = false;
    allLanguages.forEach((language: Language) => {
      if (language.value === languageKey) {
        isRTL = language.isRTL;
      }
    });
    return isRTL;
  };
  