import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template:`
  <p>This is your final warning</p>
  `,
  styles: [
    `
    p {
      padding: 20px;
      background-color: hotpink;
      border: 1px solid red;
    }
    `
  ]
})
export class WarningAlertComponent {
  
}