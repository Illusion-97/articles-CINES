import { Article } from "./article";

export interface Panier {
    id: number;
    userId: number;
    articles: Article[];
}
