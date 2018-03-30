import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Product, ProductService } from '../shared';

@Injectable()
export class ProductResolver implements Resolve<Product> {
  constructor(
    private productService: ProductService,
    private router: Router,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {

    return this.productService.getProduct(route.params['title'])
           .catch((err) => this.router.navigateByUrl('/'));

  }
}
