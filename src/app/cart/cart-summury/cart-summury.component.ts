import { Product } from './../../product/product';
import { CartItem } from './../cart-item';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-cart-summury',
  templateUrl: './cart-summury.component.html',
  styleUrls: ['./cart-summury.component.css']
})
export class CartSummuryComponent implements OnInit, DoCheck {

  // DoCheck : projede bir degisiklik oldugunda yenileniyor
  constructor(private cartService: CartService) { }

  totalCartItem: number;
  totalCartItemPrice: number;
  cartItems: CartItem[];
  ngOnInit() {
    this.cartItems = this.cartService.list();
  }

  ngDoCheck()  {
    /**
     * reduce
     * a donus degeri  totalcartitem
     * b listedeki her bir eleman
     */
    this.totalCartItem = this.cartService.list().reduce((a, b) => a + b.quantity, 0);

    this.totalCartItemPrice = this.cartService.list().reduce((a, b) => a + b.product.unitPrice * b.quantity, 0);
  }

  removeFromCart(product: Product) {
    if (confirm('Are you sure')) {
      this.cartService.removeFromCart(product);
    }
  }

}
