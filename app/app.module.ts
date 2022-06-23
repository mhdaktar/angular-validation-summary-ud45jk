import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ValidationSummaryComponent } from './validation-summary/validation-summary.component';
import { CustomValidatorDirective } from './custom-validator.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ValidationSummaryComponent, CustomValidatorDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
