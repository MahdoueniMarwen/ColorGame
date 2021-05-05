import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Credentials} from '../models/credentials';
import {UserServiceService} from '../user-service.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginGroup: FormGroup;
  credentials: Credentials;
  login = false;
  loginSubscription: Subscription = new Subscription();


  constructor(private fb: FormBuilder, private userService: UserServiceService, private router: Router) {
    this.loginGroup = this.fb.group({
      email: ['b2m@dmin', [Validators.required, Validators.email, Validators.minLength(6)]],
      password: ['12345', [Validators.required, Validators.minLength(5)]],
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

  onSubmit(): void {
    this.credentials.email = this.loginGroup.value.email;
    this.credentials.password = this.loginGroup.value.password;
    this.loginSubscription = this.userService.login(this.credentials).subscribe(data => {
      this.login = data;
      if (this.login === true) {
        this.router.navigateByUrl('');
      }
    });
  }

  ngOnDestroy(): void{
    this.loginSubscription.unsubscribe();
  }
}
