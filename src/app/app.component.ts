import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ColorGame';
  constructor(public localStorage: LocalStorageService) {
  }
}
