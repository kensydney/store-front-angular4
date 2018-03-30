import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './shared';
import { CartService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storefront';
}
