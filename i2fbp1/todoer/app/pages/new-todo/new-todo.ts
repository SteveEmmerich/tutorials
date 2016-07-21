import {Component} from '@angular/core';
import {NavController, Toast} from 'ionic-angular';
import {Data} from '../../providers/data/data';
/*
  Generated class for the NewTodoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
class Todo {
  public title: string;
  public completed: boolean;
  constructor() {
    this.title = '';
    this.completed = false;
  }
}

@Component({
  templateUrl: 'build/pages/new-todo/new-todo.html',
})
export class NewTodoPage {
  todo: Todo;
  constructor(public nav: NavController, public _Data: Data) {
    this.todo = new Todo();
  }
  save() { 
    var key = this._Data.save(this.todo); 
    console.log('todo and key: ', this.todo, key);
    if(key)
    {
      let toast = Toast.create({
        message: 'Todo Saved',
        duration: 500
      });

      toast.onDismiss(() => {
        this.nav.pop()
        console.log('Dismissed toast');
      });

      this.nav.present(toast);
    }
  }
}
