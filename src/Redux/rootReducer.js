import {combineReducers} from 'redux';
import listGameReducer from './listGames/reducer';
import homeReducer from './home/reducer';
import categoryReducer from './category/reducer';
import searchReducer from './search/reducer';
import platformReducer from './platform/reducer';

const rootReducer = combineReducers({
  home:homeReducer,
  listGame:listGameReducer,
  category:categoryReducer,
  search:searchReducer,
  platform:platformReducer
});
export default rootReducer;