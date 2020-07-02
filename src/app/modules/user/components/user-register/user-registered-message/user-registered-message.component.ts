import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-registered-message',
  templateUrl: './user-registered-message.component.html',
  styleUrls: ['./user-registered-message.component.scss'],
})
export class UserRegisteredMessageComponent implements OnInit {
  constructor(private _dialogRef: MatDialogRef<UserRegisteredMessageComponent>) {}

  ngOnInit() {}

  dismiss() {
    this._dialogRef.close();
  }
}
