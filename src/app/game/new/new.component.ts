import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Table} from '../../user/models/table';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  tableGroup: FormGroup;
  table: Table;
  tableString: string[][] | undefined;

  constructor(private fb: FormBuilder) {
    this.tableGroup = this.fb.group({
      rows: ['3', [Validators.min(1)]],
      cols: ['6', [Validators.min(1)]],
    }),
      this.table = {
        rows: 3,
        cols: 6
      };
  }

  ngOnInit(): void {
    this.table.rows = this.tableGroup.value.rows;
    this.table.cols = this.tableGroup.value.cols;
  }

  get f () {
    return this.tableGroup.controls;
  }

  drawGrid(): void{
    console.log(this.table.cols);
    console.log(this.table.rows);
    this.tableString = [];

    for (let i = 0 ; i < this.table.rows ; i++ ) {
      this.tableString[i] = [];
      for (let j = 0 ; j < this.table.cols; j++ ) {
        this.tableString[i] [j] = '';
      }
    }
  }

}
