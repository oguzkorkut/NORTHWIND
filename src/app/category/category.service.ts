import { Injectable, Inject } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'; // asenkron  servis bağlantıları
import 'rxjs/add/operator/map'; // gelen response data'yi istenilen bir nesneye map etmek icin kullanilir
import 'rxjs/add/operator/do'; // asenkron operasyon bittiginde yapilmasi istenen islemi anlatir.
import 'rxjs/add/operator/catch'; // Bir hata oldugunda yapilmasi istenen sey yazilir

import { Category } from './category';

@Injectable()
export class CategoryService {

  constructor(private http: Http,  @Inject('apiUrl') private apiUrl) { }

  url: string = this.apiUrl + '/categories';

  getCategories(): Observable<Category[]> {
    return this.http.get(this.url).map(response => response.json());
  }
}
