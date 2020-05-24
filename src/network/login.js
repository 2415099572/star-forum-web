import {loginRequest} from ".";

export function userLogin(mobile, password) {
    return loginRequest({
        url: "/user/login",
        method: "post",
        data: {
            mobile,
            password
        }
    })
}

export function checkLogin(token) {
    return loginRequest({
        url: "/user/check",
        method: "post",
        headers: {
            'Authorization': token,
        },
    })
}