import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseContentLayoutComponent } from './components/base-content-layout/base-content-layout.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { BaseContentHeaderDirective } from './directives/base-content-header.directive';
import { BaseContentBodyLeftDirective } from './directives/base-content-body-left.directive';
import { BaseContentBodyRightDirective } from './directives/base-content-body-right.directive';
import { BaseContentFooterDirective } from './directives/base-content-footer.directive';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ButtonComponent } from './components/button/button.component';
import { ReusableButtonComponent } from './components/reusable-button/reusable-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseContentLayoutComponent,
    CustomerDetailsComponent,
    BaseContentHeaderDirective,
    BaseContentBodyLeftDirective,
    BaseContentBodyRightDirective,
    BaseContentFooterDirective,
    AccountDetailsComponent,
    DynamicFormComponent,
    ButtonComponent,
    ReusableButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
