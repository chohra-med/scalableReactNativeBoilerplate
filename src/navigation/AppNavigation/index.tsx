import * as React from 'react';
import AppScreens, {AppScreensParamList} from './AppScreens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from '~/screens/SettingScreen';
import SettingsIcon from '../../assets/icons/iconSettings.svg';
import {useTranslation} from 'react-i18next';
import {useAppTheme} from '~/container/AppThemeProvider';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../screens/HomeScreen';

const Tab = createBottomTabNavigator<AppScreensParamList>();

const AppNavigation = () => {
  const {t} = useTranslation('common');
  const {colors} = useAppTheme();
  return (
    <Tab.Navigator initialRouteName={AppScreens.HOME_SCREEN}>
      <Tab.Screen
        name={AppScreens.HOME_SCREEN}
        component={HomeScreen}
        options={{
          title: t('homeScreen.homeScreen'),
          tabBarLabel: t('homeScreen.homeScreen'),
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({color, focused}): JSX.Element => {
            return (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={color}
                testID="navigateoToHomeScreen"
              />
            );
          },
          tabBarAccessibilityLabel: t('homeScreen.homeScreen'),
        }}
      />

      <Tab.Screen
        name={AppScreens.SETTING_SCREEN}
        component={SettingScreen}
        options={{
          title: t('settingScreen.settingTitle'),
          tabBarLabel: t('settingScreen.settingTitle'),
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({color}): JSX.Element => {
            return (
              <SettingsIcon testID="navigateToSettingsScreen" fill={color} />
            );
          },
          tabBarAccessibilityLabel: t('settingScreen.settingTitle'),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
