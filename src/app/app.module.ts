import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent, MiniCartComponent, SharedModule } from './shared';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { ProductService, CartService } from './shared';
import { CommonModule } from '@angular/common';


const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiniCartComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductModule,
    CartModule,
    rootRouting,
    CommonModule
  ],
  providers: [
    ProductService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
