import { SharedModule } from './../../shared/modules/shared.module';
import { NgModule } from '@angular/core';
import { UserMainComponent } from './components/user-main/user-main.component';
import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ErrorMessageComponent } from './components/user-login/error-message/error-message.component';
import { UserRegisteredMessageComponent } from './components/user-register/user-registered-message/user-registered-message.component';

@NgModule({
  imports: [SharedModule, UserRoutingModule],
  declarations: [UserMainComponent, UserLoginComponent, UserRegisterComponent, ErrorMessageComponent, UserRegisteredMessageComponent],
  entryComponents: [ErrorMessageComponent, UserRegisteredMessageComponent],
})
export class UserModule {}
