import { Injectable, Inject } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'; // asenkron  servis bağlantıları
import 'rxjs/add/operator/map'; // gelen response data'yi istenilen bir nesneye map etmek icin kullanilir
import 'rxjs/add/operator/do'; // asenkron operasyon bittiginde yapilmasi istenen islemi anlatir.
import 'rxjs/add/operator/catch'; // Bir hata oldugunda yapilmasi istenen sey yazilir

import { Product } from './product';
// import { ProductList } from './product-list.mock';

@Injectable()
export class ProductService {


  constructor(private http: Http, @Inject('apiUrl') private apiUrl) { }

  // Http servisleri ile calisildigi icin donus tipi
  getProducts(seoUrl: string): Observable<Product[]> {

    if (seoUrl) {
      return this.http.get(this.apiUrl + '/products' + '/' + seoUrl)
      .map(response => response.json());
    } else {
      return this.http.get(this.apiUrl + '/products')
      .map(response => response.json());
    }


  }
}
