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


