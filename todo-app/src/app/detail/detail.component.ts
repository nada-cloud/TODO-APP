import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITodo, Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  constructor(
    public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITodo,
  ) {}

  ngOnInit() {
    console.log(this.data.title);
  }

  public castIdToState(id: boolean): string{
    switch(id){
      case false:
        return "Not started yet";
      case true:
        return "Done";
    }
    return "";
  }

}
