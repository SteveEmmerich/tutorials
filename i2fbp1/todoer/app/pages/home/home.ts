import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {Data} from '../../providers/data/data';
import {NewTodoPage} from '../new-todo/new-todo';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  public todos: any[] = [];
  constructor(private _navController: NavController, private _data: Data) {
    let that = this;
    this._data.todos.subscribe((data) => {that.todos.push(data); console.log(that.todos)}, (err) => {console.error(err);});
  }
  newTodo()
  {
    this._navController.push(NewTodoPage);
  }
  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
  /*
### Editing a todo

## Part 2 -> login
## Part 3 -> proximi
## Part 4 -> publish*/
}
