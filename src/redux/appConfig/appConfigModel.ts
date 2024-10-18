
export enum AppLanguageType {
  FRENCH = 'fr',
  ARABIC = 'ar',
  ENGLISH = 'en',
}
export type AppConfigConfigurationState = {
  isDarkMode: boolean;
  appLanguage: AppLanguageType;
};
