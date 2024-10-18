// to learn more about app theming
// check this article
// https://medium.com/@malikchohra/build-for-scale-use-a-design-system-in-your-react-native-app-5790982cae7e
// https://medium.com/@malikchohra/build-for-scale-use-a-design-system-in-your-react-native-app-0224797da39b
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
