import { Component, OnInit } from '@angular/core';
import { Pay } from '../models/pay-on-using/pay';
import { On } from '../models/pay-on-using/on';
import { Using } from '../models/pay-on-using/using';

@Component({
  selector: 'app-pay-on-using',
  templateUrl: './pay-on-using.component.html',
  styleUrls: ['./pay-on-using.component.scss']
})
export class PayOnUsingComponent implements OnInit {
  public theme = 'material';

  constructor() {}

  ngOnInit() {}

  themeChanged(theme: string) {
    if (this.theme !== theme) {
      this.theme = theme;
    }
  }

  paySelected(pay: Pay) {}

  onSelected(on: On) {}

  usingSelected(using: Using) {}
}
