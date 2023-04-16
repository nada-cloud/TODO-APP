import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {
  todos: Todo[] = [
    new Todo(Guid.create(), 'Homework', 0, 'Mathematics exercises', '11/04/2023', '21/04/2023'),
    new Todo(Guid.create(), 'Gym', 1, 'Back exercises', '11/04/2023', '11/05/2023'),
  ]

  public castIdToState(id: number): string{
    switch(id){
      case 0:
        return "Not started yet";
      case 1:
        return "Ongoing";
      case 2:
        return "Done";
    }
    return "";
  }

}
