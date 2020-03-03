import { Component, OnInit } from '@angular/core';
import { Login } from '../Models/student';
import { CrudService } from '../Services/crud.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  // mail = "";
  // pwd = "";

  constructor(private ser: CrudService, private route: Router, private fb: FormBuilder) { }

  login() {
    this.ser.setLogin(true);
    let mail = this.loginForm.controls.email.value;
    let pwd = this.loginForm.controls.password.value;
    console.log(this.loginForm);
    this.ser.loginService(mail, pwd).subscribe((data) => {
      console.log(data);
      // if (data.length > 0) {
      //   this.route.navigate(['reactive2'])
      // }
      // else {
      //   alert('Invalid User...')
      // }
    })
  }

  ngOnInit() {
    // const email = new FormControl('', Validators.required)
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
