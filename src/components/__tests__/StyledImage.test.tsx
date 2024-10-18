// learn more about testing here
// https://medium.com/@malikchohra/guide-to-testing-in-react-native-end-to-end-test-using-detox-f29fd1344180

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ThemeProvider} from 'react-native-paper';
import StyledImage from '../StyledImage';
import {EMPTY_IMAGE_URI} from '~/api/constant';

const mockTheme = {
  colors: {
    onBackground: 'black',
    background: 'white',
  },
};

describe('StyledImage', () => {
  const source = {uri: 'https://example.com/image.jpg'};
  const placeholderSource = {uri: 'https://example.com/placeholder.jpg'};

  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={mockTheme}>
        <StyledImage source={source} {...props} />
      </ThemeProvider>,
    );

  it('renders correctly with default props', () => {
    const {getByTestId} = renderComponent();
    expect(getByTestId('styled-image')).toBeTruthy();
  });

  it('shows loader when image is loading', () => {
    const {getByTestId} = renderComponent();
    expect(getByTestId('loader')).toBeTruthy();
  });

  it('hides loader when image is loaded', () => {
    const {getByTestId, queryByTestId} = renderComponent();
    fireEvent(getByTestId('styled-image'), 'onLoadEnd');
    expect(queryByTestId('loader')).toBeNull();
  });

  it('shows placeholder image on error', () => {
    const {getByTestId} = renderComponent({placeholderSource});
    fireEvent(getByTestId('styled-image'), 'onError');
    expect(getByTestId('styled-image').props.source).toEqual(placeholderSource);
  });

  it('uses default placeholder image if no placeholderSource is provided', () => {
    const {getByTestId} = renderComponent();
    fireEvent(getByTestId('styled-image'), 'onError');
    expect(getByTestId('styled-image').props.source).toEqual({
      uri: EMPTY_IMAGE_URI,
    });
  });

  it('applies custom loader color', () => {
    const loaderColor = 'red';
    const {getByTestId} = renderComponent({loaderColor});
    expect(getByTestId('loader').props.color).toBe(loaderColor);
  });
});
