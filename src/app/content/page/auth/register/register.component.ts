import { Component, OnInit } from '@angular/core';
import { Validators , FormControl, FormGroup , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmedValidator } from './ConfirmedValidator.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  locationContainer:any[] = [];
  error:any ="";
  registerForm: FormGroup = new FormGroup({});

  constructor(private _Router:Router , private _AuthService:AuthService , private _FormBuilder:FormBuilder) {
  }
  registerFormV2()
  {
    this.registerForm = this._FormBuilder.group({
      'name': new FormControl('',[Validators.required , Validators.minLength(4)]),
      'email': new FormControl('',[Validators.required , Validators.email]),
      'phone': new FormControl('',Validators.required),
      'address': new FormControl('',Validators.required),
      'location_id': new FormControl('',Validators.required),
      'password': new FormControl('',[Validators.required , Validators.minLength(9)]),
      'confirm_password': new FormControl('',[Validators.required]),
    }, {
      validator: ConfirmedValidator('password', 'confirm_password')
    })

  }
  get registerValidation(){
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.locations()
    this.registerFormV2();
  }
  locations(){
    this._AuthService.location().subscribe((response) => {
      this.locationContainer = response
    })
  }
  registerFormValidation(registerForm:FormGroup){
    this._AuthService.register(registerForm.value).subscribe((response)=>{
      if (response.message === "User successfully registered") {
        this._Router.navigate(['/register-complete'])
      }

      else{
        this.error = "test hambozo";
      }
    });
  }

}
