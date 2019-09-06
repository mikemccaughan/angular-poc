import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  ElementRef
} from '@angular/core';
import { Using } from 'src/app/models/pay-on-using/using';
import {
  FormGroup,
  FormControl,
  ControlContainer,
  Validators
} from '@angular/forms';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-using',
  templateUrl: './using.component.html',
  styleUrls: ['./using.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsingComponent implements OnInit {
  group: FormGroup;

  @Output()
  public selected: EventEmitter<Using>;

  @Input()
  public context: string;

  private thema: string;
  @Input()
  public get theme(): string {
    return this.thema;
  }
  public set theme(value: string) {
    if (this.thema !== value) {
      this.thema = value;
      this.themeChanged();
    }
  }

  @Input()
  public collapsed: boolean;

  private selectedUsing: Using;
  @Input()
  public get using(): Using {
    return this.selectedUsing;
  }
  public set using(value: Using) {
    console.log('using set', value, this.selectedUsing);
    if (value !== this.selectedUsing) {
      this.selectedUsing = value;
      this.selected.emit(this.selectedUsing);
    }
  }

  @Input()
  methods: Using[];

  public usingControl: FormControl;

  public label: { [key: string]: string };

  public get isHintShown(): boolean {
    return this.theme === 'focused' && !this.usingControl.dirty;
  }

  public get isValueHintShown(): boolean {
    return (
      this.theme === 'focused' &&
      !!this.using.itemName &&
      !!this.using.itemName.length
    );
  }

  public get classes(): any {
    return {
      'using-component': true,
      [this.context]: true,
      [this.theme]: true
    };
  }

  constructor(
    private container: ControlContainer,
    private elementRef: ElementRef
  ) {
    if (this.container) {
      this.group = this.container.control as FormGroup;
    }
    this.selected = new EventEmitter<Using>();
    this.using = new Using();
    this.methods = [
      {
        method: 'Credit Card - *4242',
        methodName: 'Credit Card',
        itemName: 'Michael D M...',
        itemNumber: '*4242'
      },
      {
        method: 'Bank Account - *0393',
        methodName: 'Bank Account',
        itemName: 'Michael D M...',
        itemNumber: '*0393'
      }
    ];
    this.usingControl = new FormControl(this.using, [Validators.required]);
    this.label = {
      material: 'Pay Using:',
      focused: 'Using'
    };
  }

  selectedUsingChanged($event: MatSelectChange): void {
    this.using = $event.value as Using;
  }

  themeChanged() {
    if (this.theme === 'focused') {
      const arrow = this.elementRef.nativeElement.querySelector(
        '.mat-select-arrow'
      );
      if (!arrow.classList.contains('mat-icon')) {
        arrow.classList.add('mat-icon');
        arrow.textContent = 'arrow_downward';
      }
    } else {
      const arrow = this.elementRef.nativeElement.querySelector(
        '.mat-select-arrow'
      );
      arrow.classList.remove('mat-icon');
      arrow.textContent = '';
    }
  }

  ngOnInit() {
    this.themeChanged();
  }
}
