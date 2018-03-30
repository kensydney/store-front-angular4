import { Component, ElementRef } from "@angular/core";
import { Observable } from "rxjs";
import { Product, CartItem } from "../models";
import { CartService } from "../services";

@Component({
  selector: "mini-cart",
  host: {
    '(document:click)': 'handleClick($event)'
  },
  templateUrl: "./miniCart.component.html"
})
export class MiniCartComponent {
  public shoppingCartItems$: Observable<CartItem[]>;
  public shoppingCartItem: CartItem[] = [];
  public IsMinimized: boolean = true;
  public elementRef;

  constructor(private cartService: CartService, thisElement: ElementRef) {
    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe(_ => (this.shoppingCartItem = _));
    this.elementRef = thisElement;
  }

  handleClick(event) {
    var clickedComponent = event.target;
    var inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (inside) {
      this.IsMinimized = false;
    } else {
      this.IsMinimized = true;
    }
  }

  toggleCart($event) {
    $event.preventDefault();
    $event.stopPropagation();

    this.IsMinimized = !this.IsMinimized;
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public getTotalItem(): Observable<number> {
    return this.cartService.getTotalItem();
  }

  public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item)
  }
}
