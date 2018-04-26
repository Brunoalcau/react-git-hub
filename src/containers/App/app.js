import {
	Navigation
} from 'react-native-navigation';

//local
import {registerScreens} from './registerScreens'
import {Provider} from './Provider';
import {configureStore} from '../../store/configureStore';
import {navigatorStyle} from '../../config';

export class App {
	constructor() {
		const store = configureStore();
		registerScreens(store, Provider)
		this.startApp();
	}

	startApp() {
		Navigation.startSingleScreenApp({
		  screen: {
		    screen: 'Repositories',
		    navigatorStyle: navigatorStyle
		  }
		});
	}
}