import {createStore, combineReducers, applyMiddleware} from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';

// local
import {
	repository
} from '../reducers';



const appReducer = combineReducers({
	repository
});


export const configureStore = () => {
	const store = createStore(
		appReducer, 
		devToolsEnhancer(), 
		applyMiddleware(ReduxThunk)
	);
	return store;
}