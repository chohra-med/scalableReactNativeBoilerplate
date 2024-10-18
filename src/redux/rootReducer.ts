import { combineReducers } from '@reduxjs/toolkit';
import appConfigReducer from './appConfig/appConfig';

const rootReducer = combineReducers({
  appConfig: appConfigReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
