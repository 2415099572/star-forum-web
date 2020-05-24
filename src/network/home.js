import {findHotArticle} from "./article";
import {findHotProblem} from "./qa";

export function findHotArticleDesc() {
    return findHotArticle()
}

export function findHotProblemDesc() {
    return findHotProblem()
}