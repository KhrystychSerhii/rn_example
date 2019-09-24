import http from './Http';


export const getUsers = (since = 0) => http.get(`/users?${ since > 0 ? `since=${since}` : 'since=1'}&per_page=30`);

export const getUser = (login) => http.get(`/users/${login}`);

export const signIn = (user) => http.signIn(user);
export const signedInUser = () => http.getSignedInUser();
