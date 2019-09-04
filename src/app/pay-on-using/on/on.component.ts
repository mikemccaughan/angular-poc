import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { On } from 'src/app/models/pay-on-using/on';
import {
  FormControl,
  FormGroup,
  ControlContainer,
  Validators
} from '@angular/forms';

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

  @Input()
  on: On;

  public whenControl: FormControl;

  public minDate = new Date(Date.now() + 1000 * 60 * 60 * 24); // tomorrow

  public label: { [key: string]: string };

  public get isHintShown(): boolean {
    return this.theme === 'focused' && !this.whenControl.dirty;
  }

  public get classes(): any {
    return {
      'on-component': true,
      [this.context]: true,
      [this.theme]: true
    };
  }

  constructor(private container: ControlContainer) {
    if (container) {
      this.group = container.control as FormGroup;
    }
    this.selected = new EventEmitter<On>();
    this.on = new On();
    this.whenControl = new FormControl(this.on.when, [Validators.required]);
    this.label = {
      material: 'Pay On:',
      focused: ''
    };
  }

  ngOnInit() {}
}
