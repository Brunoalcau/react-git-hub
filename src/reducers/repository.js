import {forEach, cloneDeep} from 'lodash';
const initial = {
	allIds: [],
	byId: {},
  name: ''
};

const getRepositories = (state, {payload}) => {
  const newState = cloneDeep(state);
  forEach(payload, (item) => {
  	if (newState.allIds.indexOf(item.id)) {
  		newState.allIds.push(item.id);
  		newState.byId[item.id] = item;
      newState.name = item.owner.login;
  	}
  });
  return newState;
};

const clear = (state, action) => {
  console.log(state);
  return initial;
}

export const repository = (state = initial, action) => {
  switch (action.type) {
    case 'GET_REPOSITORY_SUCCESS':
      return getRepositories(state, action);
    case  'CLEAR_REPOSITORY':
      return clear(state, action);
    default:
      return state;
  }
};
