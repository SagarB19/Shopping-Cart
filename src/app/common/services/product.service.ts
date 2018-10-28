import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartProduct, Product } from '../models/product';

@Injectable()
export class ProductService {
    products: Product[];
    product: Product;
    cartProducts: Map<number, CartProduct>;
    cartProductsCount: number;
    constructor(private http: HttpClient) {
        // TODO :-
        // 1.Guard with authenticationg uard
        // 2.fetch the products from backend
        // 3.getCartProductsCount()
    }
    fetchProducts() {
        return this.http.get<{error: string, data: Product}>('http://localhost:3000/products/');
    }
    getProducts() {
        this.fetchProducts().subscribe((response) => console.log(response.data));
        return { ...this.products };
    }
    getProductById(productId: number) {
        return this.products.find(p => p.productId === productId);
    }
    addToCart(productId: number) {
        const existingProductInCart = this.cartProducts.get(productId);
        const matchingProduct: CartProduct = existingProductInCart ?
            { product: existingProductInCart.product, count: existingProductInCart.count + 1, subscription: true} :
            { product: this.products.find(p => p.productId === productId), count: 1, subscription: true };
        this.cartProducts.set(productId, matchingProduct);
    }
    removeCartProduct(productId: number) {
        const existingProductInCart = this.cartProducts.get(productId);
        if (existingProductInCart.count > 1) {
            // tslint:disable-next-line:max-line-length
            this.cartProducts.set(productId, { product: existingProductInCart.product, count: existingProductInCart.count - 1, subscription: true });
        } else {
            this.cartProducts.delete(productId);
        }
    }
    getCartProducts() {
        return Array.from(this.cartProducts.values());
    }
    getCartProductsCount() {
        let count = 0;
        this.getCartProducts().forEach(cp => count += cp.count);
        this.cartProductsCount = count;
        return this.cartProductsCount;
    }
}
