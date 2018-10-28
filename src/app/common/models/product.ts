import { Fruit } from './fruit';

export class Product {
    productId: number;
    productName: string;
    productCategory: string;
    productDescription: string;
    productPrice: ProductPrice;
    productContents: Fruit[];
    productAvailability: boolean;
    productCaution: string[]; // Consumption Cautions if any
    benefits: string[];
    nutritionalFacts: string[];
}

export class CartProduct {
    product: Product;
    count: number;
    subscription: boolean;
}

export class ProductPrice {
    subscription: number;
    individual: number;
}
