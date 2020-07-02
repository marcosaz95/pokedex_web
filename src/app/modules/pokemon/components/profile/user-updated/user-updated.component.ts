import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-updated',
  templateUrl: './user-updated.component.html',
  styleUrls: ['./user-updated.component.scss'],
})
export class UserUpdatedComponent implements OnInit {
  constructor(private _dialogRef: MatDialogRef<UserUpdatedComponent>) {}

  ngOnInit() {}

  dismiss() {
    this._dialogRef.close();
  }
}
