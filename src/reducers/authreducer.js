import {AUTHTOKEN, ACCESSTOKEN} from '../actions/authActions'

export function authReducer(state = {
	needApplicationToken: false,
	needAuthentication: true
}, action) {
	switch (action.type) {
		case AUTHTOKEN:
			let authState = action.payload;
			if (authState.provider === "gitlab") {
				authState.needApplicationToken = true;
				authState.needAuthentication = false;
			}
			else {
				authState.applicationAccessToken = action.payload.access_token
				authState.needAuthentication = false;
			}

			return {...state, ...authState}
		case ACCESSTOKEN:
			let accessTokenState = {
				applicationAccessToken: action.payload,
			}
			accessTokenState.needApplicationToken = false;
			accessTokenState.needAuthentication = false;
			return {...state, ...accessTokenState} 
		}
	return state
}