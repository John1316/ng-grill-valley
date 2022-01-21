import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false ;
  error: any = '';
  signinSubscription:any =  Subscription;

  constructor(private _Router:Router , private _AuthService:AuthService) { }
  loginForm:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required , Validators.email]),
    password: new FormControl('',[Validators.required , Validators.minLength(9)]),
  })
  // SubmitLoginForm(loginForm:FormGroup){
  //   this._AuthService.login(loginForm.value).subscribe((response) => {

  //     if (response.message === 'sucess') {
  //       localStorage.setItem("token", response.access_token);
  //       this._Router.navigate(['/home']);
  //     } else {
  //       this.error = response.error;
  //     }

  //   });
  // }
  SubmitLoginForm(loginForm: FormGroup) {
    this.signinSubscription = this._AuthService.login(loginForm.value).subscribe((response: any) => {
      this.loading = false
      this.error = ""

      localStorage.setItem("token", response.access_token);
      localStorage.setItem("user_id", response.user.id);
      localStorage.setItem("username", response.user.name);
      this._AuthService.saveCurrentUserToken();
      this._Router.navigate([`/home`])
    }, (error: any) => {
      this.error = error.error.error
    })
  }
  // ngOnDestroy() {
  //   if (this.signinSubscription) this.signinSubscription.unsubscribe()
  // }
  ngOnInit(): void {
  }

}
