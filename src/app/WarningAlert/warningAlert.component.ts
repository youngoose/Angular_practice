import { Component } from '@angular/core';

@Component ({
  selector: 'app-warning',
  templateUrl: './warningAlert.component.html',
  styles: [`
    h1 {
      color: yellow;
      background-color: black;
      width: 450px;
    }
  `]
})

export class WarningAlertComponent {
}