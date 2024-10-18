// learn more about testing here
// https://medium.com/@malikchohra/guide-to-testing-in-react-native-end-to-end-test-using-detox-f29fd1344180

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
