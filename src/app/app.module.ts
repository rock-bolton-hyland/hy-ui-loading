import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatProgressSpinnerModule} from '@angular/material'
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderLoaderComponent } from './header-loader/header-loader.component';
import { ButtonLoaderComponent } from './button-loader/button-loader.component';
import { FormLoadingOverlayComponent } from './form-loading-overlay/form-loading-overlay.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatProgressBarModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatProgressSpinnerModule, FlexLayoutModule ],
  declarations: [ AppComponent, HeaderLoaderComponent, ButtonLoaderComponent, FormLoadingOverlayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
