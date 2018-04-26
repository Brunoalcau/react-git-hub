import {Navigation} from 'react-native-navigation';
import {withNavigatorContext} from '../../enhancers';
import {Repositories, SearchUser} from '../Repositories';
export const registeredScreens = [];

export const registerScreens = (store, Provider) => {  
  
  registerComponent('Repositories', Repositories);
  registerComponent('SearchUser', SearchUser);
  
  function registerComponent(name, screen) {
  	Navigation.registerComponent(
      name,
      () => withNavigatorContext(screen),
	   store,
	   Provider
    );
    registeredScreens.push(name);
  }
};