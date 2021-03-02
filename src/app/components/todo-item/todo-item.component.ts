import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, OnChanges {


  _toDo: ToDo;
  @Input('toDo') toDo: ToDo;
  @Output('update') update = new EventEmitter<ToDo>()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    this._toDo = this.toDo
    console.log(changes)
  }

  toggleCompleted() {
    this._toDo.isDone = !this._toDo.isDone
    this.update.emit(this._toDo)
  }

}
