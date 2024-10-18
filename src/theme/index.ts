import { colors } from './Colors';
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

const lightTheme = {
  ...MD3LightTheme,
  roundness: 2,
  custom: 'property',
  colors: {
    ...MD3LightTheme.colors,
    ...colors.light
  },

};
const darkTheme = {
  ...MD3DarkTheme, // or MD3DarkTheme
  roundness: 2,
  custom: 'property',
  colors: {
    ...MD3DarkTheme.colors,
    ...colors.dark
  },
};


export { lightTheme, darkTheme };;
