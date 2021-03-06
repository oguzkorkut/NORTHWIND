import { AccountService } from './account.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Form } from '@angular/forms/src/directives/form_interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  returnUrl: string;
  message: string;
  constructor( private accountService: AccountService,
               private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || 'products';
    });
  }

  loginUser(form: NgForm) {
    this.accountService.login(form.value.user, form.value.password).subscribe(t => {
      if (t) {
        this.router.navigateByUrl(this.returnUrl);
      } else {
        this.message = 'UserName or password is incorrect!';
      }
    });
  }

}
