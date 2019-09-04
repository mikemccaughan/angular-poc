import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatIconModule } from '@angular/material';
import { LogoComponent } from './logo/logo.component';
import { PocMenuComponent } from './poc-menu/poc-menu.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { ContextModule } from './context/context.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    PocMenuComponent,
    UserMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    ContextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
