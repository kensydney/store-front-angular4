import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared';
import { Product } from '../shared';

@Component({
  selector: 'product-page',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  constructor(
    private router: Router,
    private productService: ProductService
  ) {}

  products: Product[];

  ngOnInit() {
    this.productService.getProducts().subscribe(
      
      (product) => {
        this.products = product;
      }
    );    
  }  
}
