import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Credentials} from '../models/credentials';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  credentials: Credentials;
  login = false;

  constructor(private fb: FormBuilder, private userService: UserServiceService) {
    this.loginGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    }),
    this.credentials = {
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

  get f() {
    return this.loginGroup.controls;
  }

  onSubmit() {
    this.credentials.email = this.loginGroup.value.email;
    this.credentials.password = this.loginGroup.value.password;
    this.userService.login(this.credentials).subscribe(data => {
      this.login = data;
    });
  }
}
