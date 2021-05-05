import { Injectable } from '@angular/core';
import {Credentials} from './models/credentials';
import {of, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private router: Router) { }

  login(c: Credentials): Observable<boolean>{

    if (c.email === 'b2m@dmin' && c.password === '12345') {
      this.router.navigateByUrl('');
      return of(false);
    } else {
      return of(true);
    }


  }
}
