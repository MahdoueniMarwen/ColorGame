import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit, OnDestroy {

  logoutSubscription: Subscription = new Subscription();
  loading = false;

  constructor(private userService: UserServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.loading = true;
    this.userService.logout().subscribe(data => {
      if (data === true) {
        setTimeout(() =>
          {
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
