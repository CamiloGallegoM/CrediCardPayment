import { ProductState } from "./productInterface";

export interface CartProducts extends ProductState {
    quantityProducts: number;
    totalPay: number;
}