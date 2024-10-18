// to get more knoweldge about the usage of Redux toolkit 
// check this article
// https://casainnov.com/how-to-use-redux-toolkit-for-your-react-and-react-native-app

import { combineReducers } from '@reduxjs/toolkit';
import appConfigReducer from './appConfig/appConfig';

const rootReducer = combineReducers({
  appConfig: appConfigReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
