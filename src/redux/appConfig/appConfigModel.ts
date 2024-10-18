
// to get more knoweldge about the usage of Redux toolkit 
// check this article
// https://casainnov.com/how-to-use-redux-toolkit-for-your-react-and-react-native-app

export enum AppLanguageType {
  FRENCH = 'fr',
  ARABIC = 'ar',
  ENGLISH = 'en',
}
export type AppConfigConfigurationState = {
  isDarkMode: boolean;
  appLanguage: AppLanguageType;
};
