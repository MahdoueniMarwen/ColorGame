import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  email = null;
  constructor(private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.email = this.localStorage.retrieve('user');
  }

}
