import { Component, OnInit } from '@angular/core';
import { Validators , FormGroup , FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
  contactForm:FormGroup = new FormGroup({
    'full_name' : new FormControl('' ,[Validators.required , Validators.minLength(4)]),
    'email' : new FormControl('' ,[Validators.required , Validators.email]),
    'phone': new FormControl('', [Validators.required]),
    'subject': new FormControl('',Validators.required),
    'message': new FormControl('', Validators.required)
  })
  ngOnInit(): void {
  }
  contactFormSubmit(contactForm:FormGroup){
    console.log(contactForm.value);
  }
}
