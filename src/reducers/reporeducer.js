import {REPO_CLONING, REPO_CLONED} from '../actions/repoActions'

export function repoReducer(state = {
		cloned: false
	}, action ) {
	switch(action.type) {
		case REPO_CLONED:
			return {...state, ...{
				"cloned" : true,
				"tstamp" : Date.now()
			}}
	}
	return state;
}