import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { EMAIL_REGEX, PASSWORD_REGEX } from '@shared/constants';
import { IUser } from '@interfaces/user.interface';
import { PokedexValidators } from '@shared/validators';
import { User } from '@classes/user';
import { UserRegisteredMessageComponent } from './user-registered-message/user-registered-message.component';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _pokedexValidator: PokedexValidators,
    private _router: Router,
    private _user: User,
    private _dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  /**
   *
   * Builds the form
   * @memberof RegisterComponent
   */
  buildForm() {
    this.registerForm = this._fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
        password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]],
        confirmPassword: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]],
      },
      { validator: this._pokedexValidator.passwordDontMatch.bind(this) },
    );
  }

  /**
   *
   * Redirects to sign in page
   * @memberof RegisterComponent
   */
  cancel() {
    this._router.navigate(['']);
  }

  /**
   *
   * Registers a new user
   * @memberof RegisterComponent
   */
  register() {
    const { name, email, password } = this.registerForm.value;
    const newUser: IUser = { name, email, password };
    this._user.saveUser(newUser);
    this.displaySuccessMessage();
  }

  /**
   *
   * Displayes a message saying that user was created successfully
   * @memberof RegisterComponent
   */
  displaySuccessMessage() {
    const dialogRef = this._dialog.open(UserRegisteredMessageComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this._router.navigate(['']);
    });
  }
}
