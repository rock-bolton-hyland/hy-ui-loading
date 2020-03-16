import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatProgressSpinnerModule} from '@angular/material'
import {FlexLayoutModule} from '@angular/flex-layout';
import { A11yModule } from '@angular/cdk/a11y';

import { AppComponent } from './app.component';
import { HeaderLoaderComponent } from './header-loader/header-loader.component';
import { ButtonLoaderComponent } from './button-loader/button-loader.component';
import { FormLoadingOverlayComponent } from './form-loading-overlay/form-loading-overlay.component';
import { FormOverlayComponent } from './form-overlay/form-overlay.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatProgressBarModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatProgressSpinnerModule, FlexLayoutModule, 
    A11yModule, ],
  declarations: [ AppComponent, HeaderLoaderComponent, ButtonLoaderComponent, FormLoadingOverlayComponent, FormOverlayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
