import { IUser } from './../../../../../models/interfaces/user.interface';
import { User } from './../../../../../models/classes/user';
import { PASSWORD_REGEX } from './../../../../../shared/constants';
import { PokedexValidators } from './../../../../../shared/validators';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss'],
})
export class PasswordFormComponent implements OnInit {
  passwordForm: FormGroup;
  user: IUser;

  constructor(
    private _fb: FormBuilder,
    private _pokedexValidator: PokedexValidators,
    private _user: User,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<PasswordFormComponent>,
  ) {}

  ngOnInit() {
    this.user = this._data.user;
    this.buildForm();
  }

  /**
   *
   * Builds the password form
   * @memberof PasswordFormComponent
   */
  buildForm() {
    this.passwordForm = this._fb.group(
      {
        password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]],
        confirmPassword: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]],
      },
      { validator: this._pokedexValidator.passwordDontMatch.bind(this) },
    );
  }

  /**
   *
   * Updates the password
   * @memberof PasswordFormComponent
   */
  update() {
    const { name, email, userId } = this.user;
    const user = { ...this.passwordForm.value, name, email, userId };
    this._user.updateUserByNumber(user);
    this._dialogRef.close(true);
  }
}
