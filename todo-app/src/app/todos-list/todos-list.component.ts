import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Todo } from 'src/models/todo.model';

export interface DialogData {
  id: number;
  state: number;
}


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {
  
  todos: Todo[] = [
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

}
