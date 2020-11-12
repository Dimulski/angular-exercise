import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReusableButtonComponent } from './components/reusable-button/reusable-button.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'customer-details'
  },
  {
    path: 'customer-details',
    component: CustomerDetailsComponent
  },
  {
    path: 'account-details',
    component: AccountDetailsComponent
  },
  {
    path: 'dynamic-form',
    component: DynamicFormComponent
  },
  {
    path: 'reusable-button',
    component: ReusableButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
