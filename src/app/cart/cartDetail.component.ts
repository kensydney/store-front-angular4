import { Component } from '@angular/core';
import { CartService } from '../shared';
import { Product, CartItem } from '../shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'cart-detail',
  templateUrl: './cartDetail.component.html'
})
export class CartDetailComponent {
  public shoppingCartItems$: Observable<CartItem[]>;
  public shoppingCartItem: CartItem[] = [];
  quantity: number = 1;
  constructor(
    private cartService: CartService
  )
  {
    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe(_ => (this.shoppingCartItem = _));
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  qtyChange(event){
    debugger;
    this.quantity = event;
  }

   public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item)
  }
}

