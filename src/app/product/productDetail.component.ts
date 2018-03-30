import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product-detail',
  templateUrl: './productDetail.component.html'
})
export class ProductDetailComponent implements OnInit {
    product: Product;
    quantity: number = 1;
    
  constructor (
      private route: ActivatedRoute,
      private router: Router
  ) {
  }

  ngOnInit(){
      this.route.data.subscribe(
      (data: { product: Product }) => {
        this.product = data.product;
      }
    );
  }

  qtyChange(event){
    this.quantity = event;
  }

  @Input() title: string;
  
}
