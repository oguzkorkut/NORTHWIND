import { Product } from './../product/product';
import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { CART_ITEM_LIST } from './cart-item-list';

@Injectable()
export class CartService {

  cartItems: CartItem[];
  constructor() { }

  addToCart(product: Product):void{
  
    var addedItem = CART_ITEM_LIST.find(t => t.product.productId == product.productId);
    
    if (addedItem) {
      addedItem.quantity +=1; 
    }else{
      // let cartItem = new CartItem;

      // cartItem={
      //   quantity : 1,
      //   product : product
      // };

      const cartItem : CartItem= {
        quantity : 1,
        product : product
      };
  
      CART_ITEM_LIST.push(cartItem);

    }
  }

  list():CartItem[]{
    return CART_ITEM_LIST;
  }

  clear(){
    CART_ITEM_LIST.splice(0,CART_ITEM_LIST.length);
  }

  removeFromCart(product: Product): void{
    var addedItem = CART_ITEM_LIST.find(p => p.product.productId==product.productId);
    var index = CART_ITEM_LIST.indexOf(addedItem);

    if (index != -1) {
      CART_ITEM_LIST.splice(index,1);  
    }
  }

}
