import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Using } from 'src/app/models/pay-on-using/using';
import { FormGroup, FormControl, ControlContainer, Validators } from '@angular/forms';

@Component({
  selector: 'app-using',
  templateUrl: './using.component.html',
  styleUrls: ['./using.component.scss']
})
export class UsingComponent implements OnInit {
  group: FormGroup;

  @Output()
  public selected: EventEmitter<Using>;

  @Input()
  public collapsed: boolean;

  @Input()
  using: Using;

  @Input()
  methods: Using[];

  public usingControl: FormControl;

  constructor(private container: ControlContainer) {
    if (container) {
      this.group = container.control as FormGroup;
    }
    this.selected = new EventEmitter<Using>();
    this.using = new Using();
    this.methods = [
      {
        method: 'Credit Card - *4242'
      },
      {
        method: 'Back Account - *0393'
      }
    ];
    this.usingControl = new FormControl(this.using.method, [Validators.required])
  }

  ngOnInit() {}
}
