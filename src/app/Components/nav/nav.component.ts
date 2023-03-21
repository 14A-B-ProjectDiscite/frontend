import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={}

  constructor(public accountService: AccountService, private router: Router, 
    private toastr: ToastrService) {}

  ngOnInit():void {
 
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/users');
    }, error => {
      console.log(error);
      let errorMessage = '';
  
      if (error.status === 400) {
        errorMessage = 'Invalid email or password.';
      } else {
        errorMessage = 'An error occurred while processing your request. Please try again later.';
      }
  
      this.toastr.error(errorMessage, 'Login Error');
    });
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }
}
