import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import * as React from 'react';
import AppNavigation from './AppNavigation';
import Logger from '~/utils/helpers/Logger';
import LinkingConfiguration from './LinkingConfiguration';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import appConfigSelectors from '~/redux/appConfig/appConfigSelectors';
import {darkTheme, lightTheme} from '../theme';

export default function Navigation() {
  const navigationContainerRef =
    React.useRef<NavigationContainerRef<any>>(null);

  const isDarkTheme: boolean = useSelector(appConfigSelectors.isDarkMode);

  const themeColor = isDarkTheme
    ? {...darkTheme, ...NavigationDarkTheme}
    : {...lightTheme, ...NavigationDefaultTheme};

  React.useEffect(() => {
    async function initialize() {
      Logger.logEvent('App Initialized');

      /*  
      We initialize our app here.
      for example: event calls or App tracking popup..
      */
    }
    initialize();
  }, []);

  const handleNavigationStateChange = async () => {
    const currentRouteName =
      navigationContainerRef?.current?.getCurrentRoute()?.name;
    try {
      Logger.logEvent(`Screen:${currentRouteName}` || 'Screen:Unknown');
    } catch (e) {
      Logger.recordError(e as Error);
    }
  };

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      onStateChange={handleNavigationStateChange}
      ref={navigationContainerRef}
      theme={themeColor}>
      <AppNavigation />
    </NavigationContainer>
  );
}
