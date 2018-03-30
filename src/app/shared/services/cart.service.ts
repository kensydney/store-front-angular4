import {Injectable} from '@angular/core';
import {Product, CartItem} from '../models';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs/observable/of';
@Injectable()
export class CartService {
  private itemsInCartSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
  private itemsInCart: CartItem[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: Product, quantity: number = 1) {
    let cartItem = {product: item, quantity: quantity};
    this.itemsInCartSubject.next([...this.itemsInCart, cartItem]);
  }

  public removeFromCart(item: CartItem) {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(_ => _.product.title !== item.product.title);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }

  public getItems(): Observable<CartItem[]> {
    return this.itemsInCartSubject.asObservable();
  }

  public getTotalItem(): Observable<number> {
    return this.itemsInCartSubject.map((items: CartItem[]) => {
      return items.reduce((prev, curr: CartItem) => {
        return prev + curr.quantity;
      }, 0);
    });
  }

  public getTotalAmount(): Observable<number> {
    return this.itemsInCartSubject.map((items: CartItem[]) => {
      return items.reduce((prev, curr: CartItem) => {
        return prev + parseInt(curr.product.price);
      }, 0);
    });
  }
}
