import {softRequest} from "./index";

export function findSoft() {
    return softRequest({
        url: "/soft",
        method: "get"
    })
}

export function findSoftById(id) {
    return softRequest({
        url: "/soft/" + id,
        method: "get"
    })
}

export function downloadSoft(name) {
    return softRequest({
        url: "/soft/download/" + name,
        method: "get"
    })
}