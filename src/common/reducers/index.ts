import { combineReducers } from '@reduxjs/toolkit';
import characters from './characters.reducer';
import theme from './theme.reducer';
import characterDetail from './characterDetail.reducer';

const rootReducer = combineReducers({
  characters,
  theme,
  characterDetail,
});

export default rootReducer; 