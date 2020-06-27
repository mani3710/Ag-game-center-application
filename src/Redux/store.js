import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; 
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });
//const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk,logger)));
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;