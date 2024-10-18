// learn more about the approach here
// https://medium.com/@malikchohra/build-for-scale-best-approach-on-how-to-use-react-navigation-in-react-native-d3eb7362c80e
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
