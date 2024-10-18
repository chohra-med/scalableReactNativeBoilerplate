import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum AppScreens {
  TABBED_APP = 'TabbedApp',
  HOME_SCREEN = 'HomeScreen',
  SETTING_SCREEN = 'SettingScreen',
}

export type AppScreensParamList = {
  [AppScreens.TABBED_APP]: undefined;
  [AppScreens.SETTING_SCREEN]: undefined;
  [AppScreens.HOME_SCREEN]: undefined;
};

export type AppScreenProps<T extends AppScreens> = {
  navigation: StackNavigationProp<AppScreensParamList, T>;
  route: RouteProp<AppScreensParamList, T>;
};
export default AppScreens;
