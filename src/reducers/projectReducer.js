import {projectsFetched, projectTemplatesFetched} from '../actions/projectActions'
export function projectReducer(state = {
	projects: []
}, action) {

	switch(action.type) {
		case projectsFetched:
			return {...state, ...{ projects: action.payload}}
		case projectTemplatesFetched:
			return {...state, ...{projectTemplates: action.payload}}
	}

	return state
}