import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // 定义一个items属性来存储购物车中当前产品的数组
  items: Product[] = [];
  constructor() {}

  // 将商品添加到购物车
  addToCart(product: Product) {
    this.items.push(product);
  }

  // 返回购物车,收集用户加到购物车中的商品，并返回每个商品及其数量。
  getItems() {
    return this.items;
  }

  // 清空购物车,返回一个空数组
  clearCart() {
    this.items = [];
    return this.items;
  }
}
