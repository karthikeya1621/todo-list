import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDo } from '../models'

@Injectable({
  providedIn: 'root'
})
export class StateService {

  _toDos = new BehaviorSubject<ToDo[]>([])
  _toDos$ = this._toDos.asObservable()
  private toDos: ToDo[] = []

  constructor() {
    this._toDos.subscribe(todos => {
      this.toDos = [...todos];
    })
  }

  addToDo(newToDo: ToDo) {
    this._toDos.next([...this.toDos, newToDo])
  }
}
