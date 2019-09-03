import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Movie} from "../movie";

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css']
})
export class DetailDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetailDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public movie: Movie) {};

  ngOnInit() { }

}
