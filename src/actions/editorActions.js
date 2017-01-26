
import convertMarkers from '../utils/markerconverter'
export const resourcesFetch = "EDITOR/RESOURCES:FETCH"
export const resourcesFetched = "EDITOR/RESOURCES:FETCHED"
export const resourcesFetching = "EDITOR/RESOURCES:FETCHING"

export const resourceRefreshed = "EDITOR/RESOURCES:REFRESHED"
export const resourceCurrent = "EDITOR/RESOURCE:CURRENT"
export const resourceCompiled = "EDITOR/COMPILED"


function fetchedResources(projectName, resources) {
	resources = resources.map(function(resource) {
		resource.body = ""
		return resource
	})
	return {
		type: resourcesFetched, 
		payload: {
			projectName: projectName,
			resources: resources
		}
	}
}

function refreshedResource(projectName, resource, body) {
	return {
		type: resourceRefreshed, 
		payload : {
			projectName: projectName,
			resource: resource,
			code: body
		}
	}
}

export function fetchResources(accessToken, projectName, userName) {
	return (dispatch, getState) => {
		fetch("/sourceEditor?projectName=" + projectName + "&accessToken=" + accessToken + "&userName=" + userName)
		.then(function(response) {
			return response.json()
		})
		.then(function(data) {
			dispatch(fetchedResources(projectName, data))
		})
	}
}


export function refreshResource(accessToken, projectName, resource) {
	let url = "/sourceEditor"
	let params = 
	"projectName=" + projectName + 
	"&resourceName=" + resource.resourceName +
	"&op=refresh" + 
	"&packageName=" + resource.packageName +
	"&format=json" + 
	"&accessToken=" + accessToken
	return (dispatch, getState) => {
		fetch(url, {
			method: 'POST',
      		headers: {
        		'Content-Type': 'application/x-www-form-urlencoded'
      		},
      		body: params
		}).then(function(response){
			return response.json()
		}).then(function(json) {
			dispatch(refreshedResource(projectName, resource, json.code))
		})
	}
}


export function editResource(accessToken, projectName, resource, val, callback) {
	let url = "/sourceEditor"
	let params = 
	"projectName=" + projectName +
	"&resourceRef=" + resource.packageName + "/" + resource.resourceName +
	"&op=update" +
	"&body=" + encodeURIComponent(val) +
	"&format=json"
	return (dispatch, getState) => {
		fetch(url, {
			method: 'POST',
      		headers: {
        		'Content-Type': 'application/x-www-form-urlencoded'
      		},
      		body: params
		}).then(function(response){
			return response.json()
		}).then(function(markers) {
			setMarkers(resource, markers)
			callback()
		})
	}
}

export function setMarkers(resource, markers) {
	resource.markers = convertMarkers(markers)

	return {type: "MARKERS", payload:markers}
}

export function currentResource(projectName, resource) {
	return {type: resourceCurrent, payload: {
		projectName: projectName,
		resource: resource 
	}}
}

export function compileResource(projectName, resource) {
	return function(dispatch, getState) {
		let url = "/sourceEditor"
		let params = 
			"projectName=" + projectName +
			"&resourceRef=" + resource.packageName + "/" + resource.resourceName +
			"&op=run" +
			"&format=json"

		fetch(url, {
			method: 'POST',
      		headers: {
        		'Content-Type': 'application/x-www-form-urlencoded'
      		},
      		body: params
		}).then(function(response){
			return response.json()
		}).then(function(output) {
			dispatch(compiledResource(projectName, resource, output));
		})
	}
}

export function compiledResource(projectName, resource, output) {
	return {type: resourceCompiled, payload: output}
}
