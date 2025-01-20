import { Product } from "../interfaces/productInterface";

export const getTotalPay = (products: Product[]): number => {
    return products.reduce((total, product) => total + product.price, 0);
};