import {URL} from '../config';

export const getUsersRepos = (name) => {
    return async dispatch => {
        function onSuccess(success) {
            dispatch({
                type: 'GET_REPOSITORY_SUCCESS',
                payload: success
            });
            return success;
        }
        function onError(error) {
            dispatch({
                type: 'GET_REPOSITORY_ERROR',
                error
            });
            return error;
        }
        try {
            const url = `${URL}/users/${name}/repos`;
            console.log(url);
            const response = await fetch(url);
            const rest = await response.json();
            console.log(rest);
        	return onSuccess(rest);
        } catch(e) {
            return onError(e);
        }
    }
}

export const clear = () => {
    return {
        type: 'CLEAR_REPOSITORY'
    }
}