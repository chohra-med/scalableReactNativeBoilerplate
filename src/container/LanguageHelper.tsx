import {Settings as LuxonSettings} from 'luxon';
import React, {useEffect} from 'react';
import i18n, {FALLBACK_LOCALE} from '../i18n';

import {findLanguageLabel} from '../i18n/allLanguages';
import Logger from '../utils/helpers/Logger';
import {useSelector} from 'react-redux';
import appConfigSelectors from '~/redux/appConfig/appConfigSelectors';
import {AppLanguageType} from '~/redux/appConfig/appConfigModel';

const LanguageHelper: React.FC = () => {
  //We should get the right language from Redux
  const language = useSelector(appConfigSelectors.selectAppLanguage);

  // We run it when the Language Change
  const languageLabel = findLanguageLabel(language);

  useEffect(() => {
    if (language !== i18n.language) {
      switch (language) {
        case AppLanguageType.ARABIC:
          LuxonSettings.defaultLocale = 'ar-SA';
          i18n.changeLanguage('ar-SA');
          break;
        case AppLanguageType.FRENCH:
          LuxonSettings.defaultLocale = 'fr-FR';
          i18n.changeLanguage('fr-FR');
          break;
        case AppLanguageType.ENGLISH:
        default:
          LuxonSettings.defaultLocale = FALLBACK_LOCALE;
          i18n.changeLanguage('en-UK');
      }
      Logger.trace(`Set language to ${language}`);
    }
  }, [language, languageLabel]);

  return null;
};

export default LanguageHelper;
