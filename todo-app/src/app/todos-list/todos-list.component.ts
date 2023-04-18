import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { ITodo, Todo } from 'src/models/todo.model';
import { DetailComponent } from '../detail/detail.component';
import { AddComponent } from '../add/add.component';


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {

  constructor(public dialog: MatDialog) {}
  
  todos: ITodo[] = [
    new Todo(Guid.create(), 'Homework', false, 'Mathematics exercises', '11/04/2023', '21/04/2023'),
    new Todo(Guid.create(), 'Gym', true, 'Back exercises', '11/04/2023', '11/05/2023'),
  ]

  public castIdToState(id: boolean): string{
    switch(id){
      case false:
        return "Not started yet";
      case true:
        return "Done";
    }
    return "";
  }

  public changeState(id: Guid){
    let todo = this.todos.filter(x=>x.id === id)[0];
    todo.state = !todo.state;
  }

  openDialog(id: Guid): void {
    let todo = this.todos.filter(x=>x.id === id)[0];
    const dialogRef = this.dialog.open(DetailComponent, {
      data: {
        title: todo.title,
        state: todo.state,
        description: todo.description,
        dateCreation: todo.dateCreation,
        deadline: todo.deadline,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addTodo(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      data: {
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
