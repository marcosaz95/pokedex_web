import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserMainComponent } from './components/user-main/user-main.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  {
    path: '',
    component: UserMainComponent,
    children: [
      { path: '', component: UserLoginComponent },
      { path: 'register', component: UserRegisterComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
