import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit, OnDestroy {

  logoutSubscription: Subscription = new Subscription();
  loading = false;

  constructor(private userService: UserServiceService, private router: Router, private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.loading = true;
    this.userService.logout().subscribe(data => {
      if (data === true) {
        setTimeout(() =>
          {
            this.localStorage.clear('user');
            this.router.navigate(['/']);
          },
          1000);
      }
    });
  }

  ngOnDestroy(): void {
    this.logoutSubscription.unsubscribe();
  }

}
