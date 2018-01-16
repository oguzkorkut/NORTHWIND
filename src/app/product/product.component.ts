import { AppPager } from './../app-pager';
import { AppPage } from './../../../e2e/app.po';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';

import { CartService } from './../cart/cart.service';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];
  addedProduct: string;

  pager: AppPager= new AppPager();

  constructor(private productService: ProductService,
    private notificationsService: NotificationsService,
    private cartService: CartService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getProducts(params['seoUrl']);
    });

  }

  getProducts(seoUrl: string) {
    // this.products = this.productService.getProducts().subscribe(p=>this.products);
    // deger geldiginde subscripte ol
    this.productService.getProducts(seoUrl).subscribe(p => {
      this.products = p; 
      this.pager = this.getPager(p.length,1,3);
    }
    );
  }

  addToCart(product: Product) {
    this.addedProduct = product.productName;
    this.cartService.addToCart(product);
    this.notificationsService.success('SuccessFull', product.productName + ' add to cart!');
  }

  getPager(totalItems: number, currentPage: number, pageSize: number=3): AppPager{
    let totalPage = Math.ceil(totalItems/pageSize);

    let pages: Array<number>= [];
    for(let i=0 ; i<totalPage; i++){
      pages.push(i+1);
    }

    var pager = new AppPager();

    pager.pageSize= pageSize;
    pager.currentPage = currentPage;
    pager.pageList = pages;

    return pager;
  }

  setPage(page:number){
    this.pager.currentPage= page;
  }
}
