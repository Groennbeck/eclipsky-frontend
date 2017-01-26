
export function	userURL(accessToken, provider) {
		return "/api/user?access_token=" + accessToken + "&provider=" + provider;
}

