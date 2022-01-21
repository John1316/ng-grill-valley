import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators , FormBuilder , FormControl } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  loading = false;


  constructor(private _FormBuilder:FormBuilder) { }
  addressForm = this._FormBuilder.group({
    'address_check': ['', [Validators.required]]
  })

  // Getter method to access form control
  get myForm() {
    return this.addressForm.get('address_check');
  }
  ngOnInit(): void {
  }
  onSubmit(addressForm:any){

    console.log(addressForm.value);
  }
}
