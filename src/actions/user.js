import {userURL} from '../utils/api'
import {cloneRepo} from './repoActions'
export const USERFETCHED = 'USER_FETCHED'


export function userFetched(payload) {
	return {type: USERFETCHED, payload}
}

export function fetchUser(accessToken) {
	return (dispatch, getState) => {
		fetch(userURL(accessToken, "github")).then((response) => {
			return response.json()
		}).then(function(json) {
			dispatch(userFetched(json))
			dispatch(cloneRepo(accessToken, json.login))
		})
	}
}