import { Component, Input } from '@angular/core';
import { Product } from '../shared';
import { MouseOverImageDirective } from '../shared';

@Component({
  selector: 'product-overview',
  templateUrl: './productOverview.component.html'
})
export class ProductOverviewComponent {
  constructor (
  ) {}

  @Input() product: Product;
  
}
