import {SafeAreaView} from 'react-native-safe-area-context';

import {containerStyle} from '~/theme/globalStyling/cards';
import StyledText from '../../components/Text';

export const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={containerStyle.container} testID="screen.homeScreen">
      <StyledText h2> Home Screen </StyledText>
    </SafeAreaView>
  );
};

export default HomeScreen;
