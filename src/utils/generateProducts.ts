import { faker } from '@faker-js/faker';
import { Product } from "../interfaces/productInterface";


export const generateFakeProducts = (count: number = 10): Product[] => {
    return Array.from({ length: count }, () => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({ min: 10, max: 500 })), 
      category: faker.commerce.department(),
      image: faker.image.url({ width: 600, height: 400 }), 
      stock: faker.number.int({ min: 1, max: 5 }), 
    }));
};