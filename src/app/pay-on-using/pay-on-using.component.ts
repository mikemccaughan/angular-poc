import { Component, OnInit, Input } from '@angular/core';
import { Pay } from '../models/pay-on-using/pay';
import { On } from '../models/pay-on-using/on';
import { Using } from '../models/pay-on-using/using';

@Component({
  selector: 'app-pay-on-using',
  templateUrl: './pay-on-using.component.html',
  styleUrls: ['./pay-on-using.component.scss']
})
export class PayOnUsingComponent implements OnInit {
  @Input()
  public theme: string;

  @Input()
  public context: string;

  constructor() {}

  ngOnInit() {}

  paySelected(pay: Pay) {}

  onSelected(on: On) {}

  usingSelected(using: Using) {}
}
