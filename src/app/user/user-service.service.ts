import {Injectable} from '@angular/core';
import {Credentials} from './models/credentials';
import {of, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() {
  }

  login(c: Credentials): Observable<boolean> {

    if (c.email === 'b2m@dmin' && c.password === '12345') {
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): Observable<boolean> {
    return of(true);
  }
}
