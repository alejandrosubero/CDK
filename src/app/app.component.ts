import { Component } from '@angular/core';
import { ActionButtonComponent } from './action-button/action-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cdk2';

action=  ActionButtonComponent;




}

