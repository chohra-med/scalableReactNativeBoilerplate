import { LinkingOptions } from '@react-navigation/native';
import AppScreens from './AppNavigation/AppScreens';

const LinkingConfiguration: LinkingOptions<{}> = {
  // we use our Link here
  prefixes: ['casainnov://'],
  config: {
    screens: {
      initialRouteName: 'home',
      [AppScreens.HOME_SCREEN]: {
        path: 'home',
      },
      [AppScreens.SETTING_SCREEN]: {
        path: 'setting',
      },
    },
  },
};
export default LinkingConfiguration;
