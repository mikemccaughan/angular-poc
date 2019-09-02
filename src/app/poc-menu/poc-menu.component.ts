import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-poc-menu',
  templateUrl: './poc-menu.component.html',
  styleUrls: ['./poc-menu.component.scss']
})
export class PocMenuComponent implements OnInit {
  @Input()
  public theme: string;

  @Input()
  public context: string;

  @Output()
  public themeChanged: EventEmitter<string>;

  @Output()
  public contextChanged: EventEmitter<string>;

  public get themeIsMaterial(): boolean {
    return this.theme === 'material';
  }

  public get themeIsFocused(): boolean {
    return this.theme === 'focused';
  }

  public get contextIsBmx4(): boolean {
    return this.context === 'bmx4';
  }

  public get contextIsBmxN(): boolean {
    return this.context === 'bmxn';
  }

  constructor() {
    this.themeChanged = new EventEmitter<string>();
    this.contextChanged = new EventEmitter<string>();
  }

  ngOnInit() {}

  changeTheme(theme: string) {
    if (this.theme !== theme) {
      this.theme = theme;
      this.themeChanged.emit(theme);
    }
  }

  changeContext(context: string) {
    if (this.context !== context) {
      this.context = context;
      this.contextChanged.emit(context);
    }
  }
}
