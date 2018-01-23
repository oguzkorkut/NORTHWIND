import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements DoCheck  {
  // implements OnInit
  // OnInit
  isLogged = false;



  constructor(private accountService: AccountService,
    private router: Router) { }

  // ngOnInit() {
  // }

  ngDoCheck() {
     // throw new Error("Method not implemented.");
    this.isLogged = this.accountService.isLoggedIn();
  }

  logOut() {
    this.accountService.logout();
    this.router.navigate(['account']);
  }

}
