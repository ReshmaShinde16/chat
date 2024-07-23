import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  userName: string = ''
  constructor(private matDialogRef: MatDialogRef<PopupComponent>) { }

  onSubmit() {
    this.matDialogRef.close({ userName: this.userName })
  }
}
