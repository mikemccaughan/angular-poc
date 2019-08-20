import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  HostListener
} from '@angular/core';
import { Pay } from 'src/app/models/pay-on-using/pay';
import { FormControl, Validators, FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  group: FormGroup;

  @Output()
  public selected: EventEmitter<Pay>;

  private _collapsed: boolean;
  @Input()
  public get collapsed(): boolean {
    return this._collapsed;
  }
  public set collapsed(value: boolean) {
    if (value !== this._collapsed) {
      this._collapsed = value;
    }
  }

  @Input()
  pay: Pay;

  amountControl: FormControl;

  @HostListener('click')
  onclick(event: MouseEvent) {
    this.collapsed = !this.collapsed;
  }

  constructor(private container: ControlContainer) {
    if (container) {
      this.group = container.control as FormGroup;
    }
    this.selected = new EventEmitter<Pay>();
    this.pay = new Pay();
    this.amountControl = new FormControl(this.pay.amount, [Validators.required]);
  }

  ngOnInit() {
    this.collapsed = true;
  }
}
