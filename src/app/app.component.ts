import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-poc';
  theme = 'focused';
  context = 'bmxn';

  get classes(): any {
    return ['container', this.context];
  }

  contextChanged(context: string) {
    this.context = context;
  }

  themeChanged(theme: string) {
    this.theme = theme;
  }
}
