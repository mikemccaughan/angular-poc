import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PayOnUsingComponent } from './pay-on-using/pay-on-using.component';
import { PayComponent } from './pay-on-using/pay/pay.component';
import { OnComponent } from './pay-on-using/on/on.component';
import { UsingComponent } from './pay-on-using/using/using.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatIconModule,
  MatAutocompleteModule,
  MatMenuModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './logo/logo.component';
import { PocMenuComponent } from './poc-menu/poc-menu.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PayOnUsingComponent,
    PayComponent,
    OnComponent,
    UsingComponent,
    LogoComponent,
    PocMenuComponent,
    UserMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
