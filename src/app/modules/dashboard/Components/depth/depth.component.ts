import { Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-depth',
  templateUrl: './depth.component.html',
  styleUrls: ['./depth.component.css']
})
export class DepthComponent {
  value: number = 0
  options: Options = {
    floor: 0,
    ceil: 1000,
    vertical: true,
    showTicks: true,
    tickStep: 100,
    step: 1,
    rightToLeft: true,
    showSelectionBar: true,
  }
}
