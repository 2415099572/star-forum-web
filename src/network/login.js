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