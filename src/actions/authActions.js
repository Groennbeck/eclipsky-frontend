export const AUTHTOKEN = 'AUTHTOKEN'
export const ACCESSTOKEN = 'ACCESSTOKEN'

export function storeAuth(payload) {
	return {type: AUTHTOKEN, payload};
}

export function storeAccessToken(payload) {
	return {type: ACCESSTOKEN, payload};
}