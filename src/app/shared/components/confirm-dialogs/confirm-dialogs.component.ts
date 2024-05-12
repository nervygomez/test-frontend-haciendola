import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-confirm-dialogs',
  templateUrl: './confirm-dialogs.component.html',
  styles: ''
})
export class ConfirmDialogsComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  closeDialog(confirm: boolean) {
    this.dialogRef.close(confirm)
  }
}
