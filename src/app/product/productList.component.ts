import { Component, Input } from '@angular/core';
import { Product } from '../shared';

@Component({
  selector: 'product-list',
  templateUrl: './productList.component.html'
})
export class ProductListComponent {
  constructor (
  ) {}

  @Input() products: Product[];
  
}
