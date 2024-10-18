// to learn more about app theming
// check this article
// https://medium.com/@malikchohra/build-for-scale-use-a-design-system-in-your-react-native-app-5790982cae7e

import React from 'react';

import {lightTheme, darkTheme} from '~/theme/index';
import {useSelector} from 'react-redux';
import appConfigSelectors from '~/redux/appConfig/appConfigSelectors';
import {Provider as PaperProvider, useTheme} from 'react-native-paper';
import {MD3Typescale} from 'react-native-paper/lib/typescript/types';
import {fontsMap} from '~/theme/Fonts';

interface AppThemeProviderProps {
  children: React.ReactNode;
}

export type AppTheme = typeof lightTheme & MD3Typescale;

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  // fonts const, should have the app Fonts
  const isDarkTheme: boolean = useSelector(appConfigSelectors.isDarkMode);
  const isArabic: boolean = useSelector(appConfigSelectors.isArabic);

  const fonts = isArabic ? fontsMap.rtl : fontsMap.ltr;
  const themeColor = isDarkTheme ? darkTheme : lightTheme;

  const colorAppTheme = {...themeColor, fonts};

  return <PaperProvider theme={colorAppTheme}>{children}</PaperProvider>;
};
export const useAppTheme = () => useTheme<AppTheme>();
