import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bmx4Component } from './bmx4/bmx4.component';
import { BmxnComponent } from './bmxn/bmxn.component';
import { PayOnUsingModule } from '../pay-on-using/pay-on-using.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Bmx4Component, BmxnComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PayOnUsingModule],
  exports: [Bmx4Component, BmxnComponent]
})
export class ContextModule {}
