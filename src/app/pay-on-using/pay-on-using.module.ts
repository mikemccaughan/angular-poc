import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayOnUsingComponent } from './pay-on-using.component';
import { PayComponent } from './pay/pay.component';
import { OnComponent } from './on/on.component';
import { UsingComponent } from './using/using.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatNativeDateModule,
  MatDatepickerModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  declarations: [
    PayOnUsingComponent,
    PayComponent,
    OnComponent,
    UsingComponent
  ],
  exports: [PayOnUsingComponent, PayComponent, OnComponent, UsingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule
  ]
})
export class PayOnUsingModule {}
