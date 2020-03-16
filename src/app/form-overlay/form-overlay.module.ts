import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormOverlayComponent } from './form-overlay.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule, CdkTrapFocus } from '@angular/cdk/a11y';


@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    OverlayModule,
    A11yModule,
    CdkTrapFocus,
  ],
  declarations: [
    FormOverlayComponent,
  ],
  exports: [
    FormOverlayComponent,
  ]
})
export class FormOverlayModule { }