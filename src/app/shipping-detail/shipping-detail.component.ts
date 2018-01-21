import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ShippingDetail } from './shipping-detail';
import { NotificationsService } from 'angular2-notifications';
import { CartService } from './../cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.css']
})
export class ShippingDetailComponent implements OnInit {

  constructor(private cartService: CartService,
             private notificationsService: NotificationsService,
             private router: Router) { }

  cities= [];
  model: ShippingDetail= new ShippingDetail('','',true,-1);

  ngOnInit() {
    this.cities.push(
      {'id': 1, 'name': 'Gaziantep','plaka':27},
      {'id': 2, 'name': 'Ankara','plaka':6},
      {'id': 3, 'name': 'İstanbul','plaka':34}
    );
  }

  checkout(form: NgForm) {
    if(form.invalid) {
      return;
    } else {
      this.cartService.clear();
      this.notificationsService.info('Successfull','Shopping completed!');
      this.router.navigate(["products"])
    }
  }


}
