import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ErrorMessageComponent } from './error-message/error-message.component';
import { User } from '@classes/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router, private _user: User, private _dialog: MatDialog) {}

  ngOnInit() {
    this.buildForm();
  }

  /**
   *
   * builds the form
   * @memberof LoginComponent
   */
  buildForm() {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /**
   *
   * redirects to register form
   * @memberof LoginComponent
   */
  redirectRegisterForm() {
    this._router.navigate(['/register']);
  }

  /**
   *
   * calls a function to validate credentials and then redirects the user to home screen
   * @returns
   * @memberof LoginComponent
   */
  signIn() {
    const { email, password } = this.loginForm.value;
    const validUser = this._user.validateSignInForm(email, password);
    if (!validUser) {
      this.openDialog();
      return;
    }
    this._router.navigate(['/pokemon']);
  }

  /**
   *
   * In case something went wrong, a message will appear
   * @memberof LoginComponent
   */
  openDialog() {
    const dialogRef = this._dialog.open(ErrorMessageComponent, {
      width: '250px',
    });
  }
}
