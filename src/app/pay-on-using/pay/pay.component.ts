import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  HostListener
} from '@angular/core';
import { Pay } from 'src/app/models/pay-on-using/pay';
import {
  FormControl,
  Validators,
  FormGroup,
  ControlContainer
} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  group: FormGroup;

  @Output()
  public selected: EventEmitter<Pay>;

  @Input()
  public theme: string;

  @Input()
  public context: string;

  private isCollapsed: boolean;
  @Input()
  public get collapsed(): boolean {
    return this.isCollapsed;
  }
  public set collapsed(value: boolean) {
    if (value !== this.isCollapsed) {
      this.isCollapsed = value;
    }
  }

  @Input()
  pay: Pay;

  @Input()
  public amounts: Pay[];

  amountControl: FormControl;

  public label: { [key: string]: string };

  @HostListener('click')
  onclick(event: MouseEvent) {
    this.collapsed = !this.collapsed;
  }

  public get isHintShown(): boolean {
    return (
      this.theme === 'focused' &&
      !this.isPaySelected &&
      !this.amountControl.dirty
    );
  }

  public get isPaySelected(): boolean {
    return this.theme === 'focused' && this.pay != null;
  }

  public get classes(): string {
    return ['pay-component', this.context, this.theme].join(' ');
  }

  public paySelected(event: MatAutocompleteSelectedEvent) {
    this.pay = this.amounts.find(amt => amt.amount === event.option.value);
  }

  public valueChanged(event: Event) {
    if (
      this.isPaySelected &&
      this.pay.amount !== +(event.target as HTMLInputElement).value
    ) {
      this.pay.name = this.amounts[this.amounts.length - 1].name;
    }
  }

  constructor(private container: ControlContainer) {
    if (this.container) {
      this.group = this.container.control as FormGroup;
    }
    this.selected = new EventEmitter<Pay>();
    this.pay = new Pay();
    this.amounts = [
      {
        name: 'Total Due',
        amount: 100.0
      },
      {
        name: 'Minimum Due',
        amount: 12.35
      },
      {
        name: 'Enter Different Amount',
        amount: 0.0
      }
    ];
    this.amountControl = new FormControl(this.pay.amount, [
      Validators.required
    ]);
    this.label = {
      material: 'Pay Amount ($):',
      focused: ''
    };
  }

  ngOnInit() {
    this.collapsed = true;
  }
}
