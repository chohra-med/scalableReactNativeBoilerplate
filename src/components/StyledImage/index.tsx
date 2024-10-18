import React, {useState} from 'react';
import {ImageProps, ActivityIndicator, View, StyleSheet} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import {useTheme} from 'react-native-paper';
import {EMPTY_IMAGE_URI} from '~/api/constant';

type StyledImageProps = ImageProps & {
  style?: object;
  source: Source;
  placeholderSource?: Source;
  loaderColor?: string;
};

const StyledImage = ({
  style,
  source,
  placeholderSource,
  loaderColor,
  ...props
}: StyledImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {colors} = useTheme();
  // Using an empty image from Unsplash as the default placeholder
  const defaultPlaceholder = {
    uri: EMPTY_IMAGE_URI,
  };

  function onLoadStart() {
    setIsLoading(true);
  }

  function onLoadEnd() {
    setIsLoading(false);
  }

  function onError() {
    setImageError(true);
    setIsLoading(false);
  }

  const customizedLoaderColor = loaderColor || colors.onBackground;
  const imageSource = imageError
    ? placeholderSource || defaultPlaceholder
    : source;

  return (
    <View style={[styles.container, style]}>
      <FastImage
        style={StyleSheet.absoluteFill}
        source={imageSource}
        // @ts-ignore
        onError={onError}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        {...props}
      />
      {isLoading && (
        <View
          style={[
            styles.loaderContainer,
            {backgroundColor: colors.background},
          ]}>
          <ActivityIndicator size="small" color={customizedLoaderColor} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StyledImage;
