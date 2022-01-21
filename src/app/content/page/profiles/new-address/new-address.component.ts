import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators , FormBuilder , FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.css']
})
export class NewAddressComponent implements OnInit {

  optionValue:any;
  isDisabled: boolean = true;

  error="";
  address:any;
newDeliveryAddressForm: FormGroup = new FormGroup({});

constructor(private _Router:Router, private _FormBuilder:FormBuilder) {


}
formAddress(){
  this.newDeliveryAddressForm = this._FormBuilder.group({

    'location': new FormControl('',Validators.required),
    'sub_location': new FormControl('',Validators.required),
    'address_type': new FormControl('',Validators.required),
      'address': new FormControl('',Validators.required),
      'buildingNumber': new FormControl('',Validators.required),
      'floorNumber': new FormControl('',Validators.required),
      'apartmentNumber': new FormControl('',Validators.required),


  })
}
setUserDeliveryValidators() {
  const addressControl = this.newDeliveryAddressForm.get('address');
  const buildingControl = this.newDeliveryAddressForm.get('buildingNumber');
  const floorControl = this.newDeliveryAddressForm.get('floorNumber');
  const apartementControl = this.newDeliveryAddressForm.get('apartmentNumber');

  this.newDeliveryAddressForm.get('address_type')?.valueChanges.subscribe(addressType => {

      if (addressType === 'villa') {
        addressControl?.setValidators([Validators.required]);
        buildingControl?.setValidators([Validators.required]);
        floorControl?.setValidators(null);
        apartementControl?.setValidators(null);
        // apartementControl?.;
      }

      if (addressType === 'building') {
        addressControl?.setValidators([Validators.required]);
        buildingControl?.setValidators([Validators.required]);
        floorControl?.setValidators([Validators.required]);
        apartementControl?.setValidators([Validators.required]);
      }
      if(addressType === 'other'){
        addressControl?.setValidators([Validators.required]);
        buildingControl?.setValidators(null);
        floorControl?.setValidators(null);
        apartementControl?.setValidators(null);
      }


      addressControl?.updateValueAndValidity();
      buildingControl?.updateValueAndValidity();
      floorControl?.updateValueAndValidity();
      apartementControl?.updateValueAndValidity();
    });
}
get newAddressValidation(){
  return this.newDeliveryAddressForm.controls;
}
ngOnInit(): void {
  this.formAddress();
  this.setUserDeliveryValidators();

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
//   return this.newDeliveryAddressForm = this._FormBuilder.group({
//     'villa_no_of_building': new FormControl('',Validators.required),
//     'villa_address': new FormControl('',Validators.required),
//     'location': new FormControl('',Validators.required),
//     'sub_location': new FormControl('',Validators.required),
//     'address_type': new FormControl('',Validators.required),
//   })
// }
// createGroupBuilding()
// {
//   return this.newDeliveryAddressForm = this._FormBuilder.group({
//     'location': new FormControl('',Validators.required),
//     'sub_location': new FormControl('',Validators.required),
//     'address_type': new FormControl('',Validators.required),
//     'building_no_of_building': new FormControl('',Validators.required),
//     'building_address': new FormControl('',Validators.required),
//     'building_no_of_apartment': new FormControl('',Validators.required),
//     'building_no_of_floor': new FormControl('',Validators.required),
//   })
// }
registerFormValidation(newDeliveryAddressForm:FormGroup){

}

}
