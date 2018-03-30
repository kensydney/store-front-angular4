import { Component, Input} from '@angular/core';
import { Product } from '../shared';
import { CartService } from '../shared';

@Component({
  selector: 'add-to-cart',
  templateUrl: './addToCart.component.html'
})
export class AddToCartComponent {
  constructor (
    private cartService: CartService
  ) {}

  @Input() quantity: string;
  @Input() product: Product;

  public addToCart(){
    debugger;
    this.cartService.addToCart(this.product, parseInt(this.quantity));
  }
  
}
