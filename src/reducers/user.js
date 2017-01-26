import {USERFETCHED} from '../actions/user'

export function userReducer(state = {}, action) {
	switch (action.type) {
		case USERFETCHED:
			return {...state, ...action.payload}
	}
	return state
}