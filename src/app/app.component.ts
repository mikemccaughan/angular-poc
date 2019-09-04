import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-poc';
  theme = 'material';
  context = 'bmx4';

  get classes(): any {
    return {
      [this.context]: true
    };
  }

  contextChanged(context: string) {
    this.context = context;
  }

  themeChanged(theme: string) {
    this.theme = theme;
  }
}
