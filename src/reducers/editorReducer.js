import {resourcesFetched, resourceRefreshed, resourceCurrent, resourceCompiled} from '../actions/editorActions'
function editorReducer(state = {
	projects: [],
	output: {}
}, action) {
	switch(action.type) {
		case resourcesFetched:
			let projects = state.projects
		 	let project = projects.find((project) => {
				return project.projectName == action.payload.projectName
			});
		 	if (project == undefined) {
		 		projects.push(action.payload)
				return {...state, ...{ projects: projects}}
		 	}
			return state

		case resourceRefreshed:
			let p2 = state.projects.map((p) => {
				if (action.payload.projectName === p.projectName) {
					p.resources = p.resources.map((r) => {
						if (action.payload.resource.resourceName === r.resourceName) {
							r.body = action.payload.code;
						}
					return r
					})
				}
				return p
			})

			return {...state, ...{projects: p2}}
		
		case resourceCompiled:
			return {...state, ...{output: action.payload}}

		default:
			return state
	}
	return state
}
export default editorReducer