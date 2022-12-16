import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  isOpenMenu: boolean = false;
  cards: any[] = [];
  constructor(public dialog: MatDialog) { }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {
  }

  openMenu() {
    this.isOpenMenu = !this.isOpenMenu
  }
}
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
