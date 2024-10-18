import { Dimensions } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const iPhone5ScreenWidth = 320;
const isSmallScreen = WIDTH <= iPhone5ScreenWidth;

export default { WIDTH, HEIGHT, isSmallScreen };
