import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  constructor(private _dialogRef: MatDialogRef<ErrorMessageComponent>) {}

  ngOnInit() {}

  dismiss() {
    this._dialogRef.close();
  }
}
