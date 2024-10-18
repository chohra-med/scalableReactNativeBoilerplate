// to learn more about app theming
// check this article
// https://medium.com/@malikchohra/build-for-scale-use-a-design-system-in-your-react-native-app-5790982cae7e

import { Dimensions } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const iPhone5ScreenWidth = 320;
const isSmallScreen = WIDTH <= iPhone5ScreenWidth;

export default { WIDTH, HEIGHT, isSmallScreen };
