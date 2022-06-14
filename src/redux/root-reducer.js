import { combineReducers } from 'redux';
import app from './app/reducer';
import sideState from '../redux/reducer/sideReducer';
import ThemeSwitcher from './themeSwitcher/reducer';
import LanguageSwitcher from './languageSwitcher/reducer';
import userReducer from './reducer/userReducer';

export default combineReducers({
  app,
  sideState,
  userState: userReducer,
  ThemeSwitcher: ThemeSwitcher,
  LanguageSwitcher: LanguageSwitcher,
});
