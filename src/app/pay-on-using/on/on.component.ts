import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { On } from 'src/app/models/pay-on-using/on';
import {
  FormControl,
  FormGroup,
  ControlContainer,
  Validators
} from '@angular/forms';
import { MatCalendarCellCssClasses, MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-on',
  templateUrl: './on.component.html',
  styleUrls: ['./on.component.scss']
})
export class OnComponent implements OnInit {
  group: FormGroup;

  @Output()
  public selected: EventEmitter<On>;

  @Input()
  public theme: string;

  @Input()
  public context: string;

  @Input()
  public collapsed: boolean;

  private selectedOn: On;
  @Input()
  public get on(): On {
    return this.selectedOn;
  }
  public set on(value: On) {
    if (value !== this.selectedOn) {
      this.selectedOn = value;
      this.selected.emit(this.selectedOn);
    }
  }

  @Input()
  public keyDates: { [key: string]: Date };

  public key2Display: { [key: string]: string };

  public dateKeys: { [key: string]: string };

  public whenControl: FormControl;

  public minDate = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000); // tomorrow

  public maxDate = new Date();

  public label: { [key: string]: string };

  public get isHintShown(): boolean {
    return this.theme === 'focused' && !this.whenControl.dirty;
  }

  public get isOnNameHintShown(): boolean {
    return this.theme === 'focused' && this.on.name && this.on.name.length > 0;
  }

  public get classes(): any {
    return {
      'on-component': true,
      [this.context]: true,
      [this.theme]: true
    };
  }

  makeDateOnly(date: Date): Date {
    if (!date) {
      return date;
    }
    const d = new Date(date.valueOf());
    d.setHours(0, 0, 0, 0);
    return d;
  }

  constructor(private container: ControlContainer) {
    if (container) {
      this.group = container.control as FormGroup;
    }
    this.maxDate.setFullYear(this.maxDate.getFullYear() + 5); // five years
    this.selected = new EventEmitter<On>();
    this.on = new On();
    this.whenControl = new FormControl(this.on.when, [Validators.required]);
    this.label = {
      material: 'Pay On:',
      focused: ''
    };
    this.keyDates = {
      'Minimum Due Date': this.makeDateOnly(
        new Date(Date.now() + 16 * 24 * 60 * 60 * 1000)
      ),
      'Total Due Date': this.makeDateOnly(
        new Date(Date.now() + 36 * 24 * 60 * 60 * 1000)
      )
    };

    this.key2Display = Object.keys(this.keyDates).reduce((agg, cur) => {
      agg[cur.replace(/\s/g, '-').toLowerCase()] = cur;
      return agg;
    }, {});
    this.dateKeys = Object.keys(this.keyDates).reduce((agg, cur) => {
      agg[this.keyDates[cur].toISOString()] = cur;
      return agg;
    }, {});
  }

  ngOnInit() {}

  calendarClosed() {
    console.log('closed', this.whenControl.value);
    if (this.whenControl.value && this.whenControl.value.getTime) {
      console.log('value changed');
      this.on = { when: this.whenControl.value } as On;
      const date = this.whenControl.value.toISOString();
      const key = this.dateKeys[date];
      if (key && key.length > 0) {
        this.on.name = key;
      }
    }
  }

  getKeyDateClass = (date: Date) => {
    const dateValue = this.makeDateOnly(date).valueOf();
    const keyValues = Object.values(this.keyDates).map(d =>
      this.makeDateOnly(d).valueOf()
    );
    const indexOfKeyValue = keyValues.indexOf(dateValue);
    if (keyValues.includes(dateValue)) {
      const foundKey = Object.keys(this.keyDates)[indexOfKeyValue];
      return foundKey.replace(/\s/g, '-').toLowerCase();
    }
    return {};
  }
}
