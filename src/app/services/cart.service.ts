import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
    console.log(this.items);

    let total = 0;
    this.items.forEach(item => total += item.price)
    console.log('costo totale', total);

  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
