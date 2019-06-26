import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable()
export class CartService {
  items = [];

  constructor(
    private http: HttpClient,
  ) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItemz() {
    return this.items;
  }

  clearCartz() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}