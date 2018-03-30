import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartDetailComponent } from './cartDetail.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';


const cartRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'cart',
    component: CartDetailComponent
  }
]);

@NgModule({
  imports: [
    cartRouting,
    CommonModule,
    SharedModule
  ],
  declarations: [
    CartDetailComponent
  ]
})
export class CartModule {}
