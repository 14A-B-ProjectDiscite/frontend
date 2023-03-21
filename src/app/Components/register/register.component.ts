import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model:any={};
  
  constructor(private accountService: AccountService, private toastr: ToastrService){}

  ngOnInit():void{

  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
      let errorMessage = '';
  
      if (error.status === 400) {
        // Handle validation errors
        errorMessage = 'Validation error(s): <br><ul>';
  
        for (const key in error.error.errors) {
          if (error.error.errors.hasOwnProperty(key)) {
            errorMessage += `<li>${error.error.errors[key]}</li>`;
          }
        }
  
        errorMessage += '</ul>';
      } else if (error.status === 409) {
        errorMessage = error.error;
      } else {
        errorMessage = 'An error occurred while processing your request. Please try again later.';
      }
  
      this.toastr.error(errorMessage, 'Registration Error', {enableHtml: true});
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
