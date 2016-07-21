import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class Data {
    private _todos$: any;
    private _db: any;
    private _todosRef: any;
    
    constructor() {
      this._db = firebase.database().ref('/');
      this._todosRef = firebase.database().ref('todos');
      this._todosRef.on('child_added', this.handleData, this);
      this._todos$ = new ReplaySubject();
    }
    get todos()
    {
        return this._todos$;
    }
    
    handleData(snap)
    {
        try {
            // Firebase stores everything as an object, but we want an array.
            var keys = Object.keys(snap.val());
            console.log('keys: ', keys, snap.val());
            // variable to store the todos added
            var data = [];
            // Loop through the keys and push the todos into an array
            for( var i = 0; i < keys.length; ++i)
            {
                data.push(snap.val()[keys[i]]);
            }
            // Tell our observer we have new data
            this._todos$.next(snap.val());
        }
        catch (error) {
            console.log('catching', error);
        }
    }
    save(todo)
    {
      return this._todosRef.push(todo).key;
    }
};