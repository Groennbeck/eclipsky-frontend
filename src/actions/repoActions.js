import {notify} from 'react-notify-toast';
import {fetchProjects} from './projectActions'
export const REPO_CLONING = 'REPO/CLONING'
export const REPO_CLONE = 'REPO/CLONE'
export const REPO_CLONED = 'REPO/CLONED'
export const REPO_PUSHED = 'REPO/PUSHED'
export const REPO_PUSHING = 'REPO/PUSHING'
export function cloningRepo() {
	return { type: REPO_CLONING }
}

export function clonedRepo() {
	return { type: REPO_CLONED }
}


export function cloneRepo(accessToken, userName) {
	return (dispatch, getState) => {
		if (getState().repo.cloned == true){
			dispatch(fetchProjects(accessToken, userName));
			return;
		}
		dispatch(cloningRepo())
		fetch('storage/clone/', {
  			method: 'POST',
  			headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json',
  			},
  			body: JSON.stringify({
    			access_token: accessToken,
    			username: userName
  			})
		}).then(function(json){
			dispatch(clonedRepo())
			dispatch(fetchProjects(accessToken, userName));
		})
	}
}

export function pushed() {
	return {type: REPO_PUSHED}
}

export function pushing() {
	return {type: REPO_PUSHING}
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}


export function push(accessToken, userName, project) {

	let body = {
		action:"save",
		access_token: accessToken,
		username: userName,
		project:project
	}

	return (dispatch, getState) => {
		dispatch(pushing())
		fetch('/storage/repo/', {
			method: 'POST',
      		headers: {
        		'Content-Type': 'application/json'
      		},
      		body: JSON.stringify(body)
		})
		.then(checkStatus)
		.then(function(response) {
			return response.json();
		}).then(function(status) {
			notify.show("Successfully pushed to github", "success")
			dispatch(pushed())
		})
		.catch(function(error) {
			notify.show("Failed to push to github", "error")
		})
	}
}