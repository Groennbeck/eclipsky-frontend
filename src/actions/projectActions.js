export const projectsFetch = "PROJECT/FETCH"
export const projectsFetched = "PROJECT/FETCHED"
export const projectsFetching = "PROJECT/FETCHING"
export const projectTemplatesFetched = "PROJECT/TEMPLATES/FETCHED"
export function fetchingProjects() {
	return { type: projectsFetching };
}
export function fetchedProjects(projects) {
	return { type: projectsFetched, payload: projects }
}

export function fetchedProjectTemplates(projectTemplates) {
	return { type: projectTemplatesFetched, payload: projectTemplates }
}

export function fetchProjects(accessToken, userName) {
	return (dispatch, getState) => {
		dispatch(fetchingProjects())
		fetch('/storage/projects?accessToken=' + accessToken + "&userName="  + userName)
		.then(function(response) {
			return response.json();
		}).then(function(projects) {
			dispatch(fetchedProjects(projects));
		});
	}
}


export function fetchProjectTemplates() {
	return (dispatch, getState) => {
		fetch('/api/projecttemplates')
		.then(function(response){
			return response.json()
		}).then(function(projectTemplates){
			dispatch(fetchedProjectTemplates(projectTemplates))
		})
	}
}