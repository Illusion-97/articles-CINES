import { Panier } from "./panier";

export interface Commande {

    id: number;
    date: Date;
    panier: Panier;
    userId: number;

}
