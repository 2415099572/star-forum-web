import {articleRequest} from "./index";

export function findArticle() {
    return articleRequest({
        url: "/article",
        method: "get"
    })
}

export function findArticleById(articleId) {
    return articleRequest({
        url: "/article/" + articleId,
        method: "get"
    })
}

export function findHotArticle() {
    return articleRequest({
        url: "/article/hot",
        method: "get"
    })
}

export function addArticle(article) {
    return articleRequest({

    })
}

export function findArticleByUserId(userId) {
    return articleRequest({
        url: "/article/user/" + userId,
        method: "get"
    })
}


