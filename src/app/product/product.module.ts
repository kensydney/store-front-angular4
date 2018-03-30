import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { ProductComponent } from './product.component';
import { ProductListComponent } from './productList.component';
import { ProductOverviewComponent } from './productOverview.component';
import { AddToCartComponent } from './addToCart.component';
import { ProductDetailComponent } from './productDetail.component';
import { MouseOverImageDirective } from '../shared';
import { ProductResolver } from './product-resolver.service';
import { SharedModule } from '../shared';


const productRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: ProductComponent
  },
  { path: 'details/:title', 
    component: ProductDetailComponent,
    resolve: {
      product: ProductResolver
    } 
  }
]);

@NgModule({
  imports: [
    productRouting,
    CommonModule,
    SharedModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductOverviewComponent,
    ProductDetailComponent,
    AddToCartComponent,
    MouseOverImageDirective
  ],
  providers:[
    ProductResolver
  ]
})
export class ProductModule {}
