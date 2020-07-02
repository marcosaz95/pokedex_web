import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { EMAIL_REGEX } from '@shared/constants';
import { IUser } from '@interfaces/user.interface';
import { PasswordFormComponent } from './password-form/password-form.component';
import { User } from '@classes/user';
import { UserUpdatedComponent } from './user-updated/user-updated.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;

  constructor(private _user: User, private _fb: FormBuilder, private _dialog: MatDialog) {}

  ngOnInit() {
    this.buildForm();
  }

  /**
   *
   * builds the form
   * @memberof ProfileComponent
   */
  buildForm() {
    const { name, email } = this._user.profile;
    this.userForm = this._fb.group({
      name: [name, Validators.required],
      email: [email, [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      password: [{ value: '*****', disabled: true }],
    });
  }

  /**
   *
   * updates the user information
   * @memberof ProfileComponent
   */
  update() {
    const { userId, password } = this._user.profile;
    const userToUpdate: IUser = { ...this.userForm.value, userId, password };
    this._user.updateUserByNumber(userToUpdate);
    this.successUpdated();
  }

  /**
   *
   * opnes password form in a modal
   * @memberof ProfileComponent
   */
  openPasswordForm() {
    this.openModal();
  }

  async openModal() {
    const dialogRef = this._dialog.open(PasswordFormComponent, {
      width: '450px',
      data: { user: this._user.profile },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.successUpdated();
      }
    });
  }

  /**
   *
   * displayes a success alert after user is updated
   * @memberof ProfileComponent
   */
  successUpdated() {
    const dialogRef = this._dialog.open(UserUpdatedComponent, {
      width: '250px',
    });
  }
}
