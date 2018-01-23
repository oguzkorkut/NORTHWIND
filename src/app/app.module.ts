import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummuryComponent } from './cart/cart-summury/cart-summury.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartService } from './cart/cart.service';
import { VatAddedPipe } from './product/vat-added.pipe';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { AccountService } from './account/account.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full' // adres tam olarak path de belirtilen sekilde olmali anlaminda
  },
  {
    path: 'products',
    component: ProductComponent // products path gelirse ProductComponent ac
  },
  {
    path: 'products/:seoUrl',
    component: ProductComponent
  },
  {
    path: 'my-cart',
    component: CartComponent
  },
  {
    path: 'shipping-detail',
    component: ShippingDetailComponent
  },
  {
    path: 'account',
    component: AccountComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummuryComponent,
    LoggedComponent,
    NotFoundComponent,
    VatAddedPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    { provide: 'apiUrl', useValue: 'http://northwindapi.azurewebsites.net/api' },
    NotificationsService,
    CartService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
