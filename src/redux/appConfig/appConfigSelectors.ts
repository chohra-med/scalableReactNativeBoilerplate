import { RootState } from '../rootReducer';
import { AppLanguageType } from './appConfigModel';

const isDarkMode = (state: RootState) => state.appConfig.isDarkMode;

const selectAppLanguage = (state: RootState) => state.appConfig.appLanguage;
const isArabic = (state: RootState) => state.appConfig.appLanguage === AppLanguageType.ARABIC;

export default {
  isDarkMode,
  selectAppLanguage,
  isArabic
};
