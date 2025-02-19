// to learn more about Animation
// check this article
// https://casainnov.com/learn-animation-in-react-native-using-reanimated-library

import {SafeAreaView} from 'react-native-safe-area-context';

import {containerStyle} from '~/theme/globalStyling/cards';
import StyledText from '../../components/atoms/Text';
import React, {useEffect} from 'react';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export const HomeScreen = (): JSX.Element => {
  const scaleText = useSharedValue(0);

  useEffect(() => {
    scaleText.value = withTiming(1, {
      duration: 3000,
      easing: Easing.inOut(Easing.ease),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaleText.value}],
      alignItems: 'center',
      justifyContent: 'center',
    };
  });
  return (
    <SafeAreaView style={containerStyle.container} testID="screen.homeScreen">
      <Animated.View style={animatedStyle}>
        <StyledText h2> Home Screen </StyledText>
      </Animated.View>
    </SafeAreaView>
  );
};

export default HomeScreen;
