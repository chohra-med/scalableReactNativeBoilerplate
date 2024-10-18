import * as React from 'react';

import LoadingScreen from '../LoadingComponent';
import {customRender} from '../../../__tests__/testHelper';

describe('tests for LoadingScreen component', () => {
  it('given Loading screen without props, null should be returned', () => {
    const tree = customRender(<LoadingScreen />).toJSON();
    expect(tree).toBeNull();
  });

  it('given the Loading prop, ActivityIndicator should be returned', () => {
    const {getByTestId} = customRender(<LoadingScreen loading />);
    const element = getByTestId('activity-indicator');
    expect(element).not.toBeNull();
  });
});
