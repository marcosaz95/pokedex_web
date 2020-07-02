import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-out-message',
  templateUrl: './sign-out-message.component.html',
  styleUrls: ['./sign-out-message.component.scss'],
})
export class SignOutMessageComponent implements OnInit {
  constructor(private _dialogRef: MatDialogRef<SignOutMessageComponent>) {}

  ngOnInit() {}

  dismiss() {
    this._dialogRef.close();
  }
}
