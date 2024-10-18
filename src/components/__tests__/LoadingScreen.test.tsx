// learn more about testing here
// https://medium.com/@malikchohra/guide-to-testing-in-react-native-end-to-end-test-using-detox-f29fd1344180
// https://blog.stackademic.com/guide-to-testing-in-react-native-unit-and-integration-test-6cca27dfe293
import * as React from 'react';

import LoadingScreen from '../LoadingComponent';
import {render} from '@testing-library/react-native';

describe('tests for LoadingScreen component', () => {
  it('given Loading screen without props, null should be returned', () => {
    const tree = render(<LoadingScreen />).toJSON();
    expect(tree).toBeNull();
  });

  it('given the Loading prop, ActivityIndicator should be returned', () => {
    const {getByTestId} = render(<LoadingScreen loading />);
    const element = getByTestId('activity-indicator');
    expect(element).not.toBeNull();
  });
});
