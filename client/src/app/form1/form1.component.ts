import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PassMessageService } from '../pass-message.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private msg: PassMessageService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      department: [''],
      gender: [''],
      dob: ['']
    });    
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.registerForm.value; // form data
    this.router.navigate(['/form']);
  }

 

}
