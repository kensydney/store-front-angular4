import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from '../models';

@Injectable()
export class ProductService {
  constructor (    
  ) {}

  getProducts(): Observable<Product[]> {
    const subject = new Subject<any>();
    setTimeout(() => {subject.next(PRODUCTS);
                      subject.complete();}, 200);
    return subject;
  };

  getProduct(title): Observable<Product> {
      const subject = new Subject<any>();
      const product = PRODUCTS.filter(product => product.title == title)[0];
      setTimeout(() => {subject.next(product);
                      subject.complete();}, 200);
    return subject;
  }

}


const PRODUCTS = [
  {
    "title": "Blue Stripe Stoneware Plate",
    "brand": "Kiriko",
    "price": 40,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    "image": "blue-stripe-stoneware-plate.jpg"
  },
  {
    "title": "Hand Painted Blue Flat Dish",
    "brand": "Kiriko",
    "price": 28,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
    "image": "hand-painted-blue-flat-dish.jpg"
  },
  {
    "title": "Heme",
    "brand": "Dust & Form",
    "price": 52,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
    "image": "heme.jpg"
  },
  {
    "title": "Mashiko-Yaki Green Small Plate",
    "brand": "Kiriko",
    "price": 28,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    "image": "mashiko-yaki-green-small-plate.jpg"
  },
  {
    "title": "Mashiko-Yaki Indigo Small Plate",
    "brand": "Kiriko",
    "price": 28,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    "image": "mashiko-yaki-indigo-small-plate.jpg"
  },
  {
    "title": "Mashiko-Yaki Saucer",
    "brand": "Kiriko",
    "price": 18,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    "image": "mashiko-yaki-saucer.jpg"
  }
  ]
