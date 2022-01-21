import { Component, OnInit } from '@angular/core';
import { Validators , FormGroup , FormBuilder , FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-pickup',
  templateUrl: './new-pickup.component.html',
  styleUrls: ['./new-pickup.component.css']
})
export class NewPickupComponent implements OnInit {
  newpickupAddressForm: FormGroup = new FormGroup({});

  constructor(private _Router:Router, private _FormBuilder:FormBuilder) {


  }
  pickupAddress(){
    this.newpickupAddressForm = this._FormBuilder.group({

      'mobile' : new FormControl('', [Validators.required] ),
      'home_address' : new FormControl('', [Validators.required] ),
      'pickuptime' : new FormControl('', [Validators.required] ),
      'location' : new FormControl('', [Validators.required] ),


    })
  }

  get newpickupAddressValidation(){
    return this.newpickupAddressForm.controls;
  }
  ngOnInit(): void {
    this.pickupAddress();

  }
  // onChange(newValue:any) {
  //   console.log(newValue);
  //   this.optionValue = newValue;  // don't forget to update the model here
  //   // ... do other stuff here ...
  //   if (newValue == 'villa') {

  //     this.createGroupBuildingVilla();
  //   }else if(newValue == 'building'){
  //     this.createGroupBuilding();

  //   }
  // }
  // createGroupBuildingVilla(){
  //   return this.newpickupAddressForm = this._FormBuilder.group({
  //     'villa_no_of_building': new FormControl('',Validators.required),
  //     'villa_address': new FormControl('',Validators.required),
  //     'location': new FormControl('',Validators.required),
  //     'sub_location': new FormControl('',Validators.required),
  //     'address_type': new FormControl('',Validators.required),
  //   })
  // }
  // createGroupBuilding()
  // {
  //   return this.newpickupAddressForm = this._FormBuilder.group({
  //     'location': new FormControl('',Validators.required),
  //     'sub_location': new FormControl('',Validators.required),
  //     'address_type': new FormControl('',Validators.required),
  //     'building_no_of_building': new FormControl('',Validators.required),
  //     'building_address': new FormControl('',Validators.required),
  //     'building_no_of_apartment': new FormControl('',Validators.required),
  //     'building_no_of_floor': new FormControl('',Validators.required),
  //   })
  // }
  registerFormValidation(newpickupAddressForm:FormGroup){
    console.log(newpickupAddressForm.value);
  }


}
