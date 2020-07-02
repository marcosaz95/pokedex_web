import { NgModule } from '@angular/core';

import { ErrorMessageComponent } from './components/user-login/error-message/error-message.component';
import { SharedModule } from '@shared/modules/shared.module';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserMainComponent } from './components/user-main/user-main.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserRegisteredMessageComponent } from './components/user-register/user-registered-message/user-registered-message.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [SharedModule, UserRoutingModule],
  declarations: [UserMainComponent, UserLoginComponent, UserRegisterComponent, ErrorMessageComponent, UserRegisteredMessageComponent],
  entryComponents: [ErrorMessageComponent, UserRegisteredMessageComponent],
})
export class UserModule {}
