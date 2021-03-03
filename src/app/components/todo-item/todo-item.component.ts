import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { ToDo } from 'src/app/models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit, OnChanges {
  _toDo: ToDo;
  @Input('toDo') toDo: ToDo;
  @Output('update') update = new EventEmitter<ToDo>();
  @Output('delete') delete = new EventEmitter<string>();


  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes) {
    this._toDo = this.toDo;
  }

  toggleCompleted(event: Event) {
    event.stopPropagation()
    this.update.emit({...this._toDo, isDone: !this._toDo.isDone});
  }

  onDelete(event: Event,id: string) {
    event.stopPropagation()
    this.delete.emit(id);
  }
}
