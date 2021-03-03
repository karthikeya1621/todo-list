import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { StateService } from 'src/app/services/state.service';
import { v4 } from 'uuid';
import * as TodosActions from '../../store/todos.actions';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, AfterViewInit {
  newTask = new FormControl('', Validators.required);
  toDos$: Observable<ToDo[]>;
  user$: Observable<any>;

  constructor(private auth: AuthService, private store: Store<any>) {
    this.store.dispatch(TodosActions.clearToDoState())
    this.toDos$ = store.select((s) => s.todos);
    this.user$ = auth.currentUser$;
    setTimeout(() => {
      this.store.dispatch(TodosActions.loadToDos());
    }, 300)
  }

  ngAfterViewInit(): void {
    document
      .getElementById('addtodo-input')
      .addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.addTask();
        }
      });
  }

  ngOnInit(): void {}

  addTask() {
    this.newTask.markAsTouched();
    if (this.newTask.valid) {
      // this.state.addToDo({
      //   id: v4(),
      //   title: this.newTask.value,
      //   isDone: false,
      //   createdAt: Date.now(),
      //   userId: '1',
      // });

      this.store.dispatch(
        TodosActions.addToDo({
          payload: {
            id: v4(),
            title: this.newTask.value,
            isDone: false,
            createdAt: Date.now(),
            userId: '1',
          },
        })
      );
      this.newTask.setValue('');
    }
  }

  inputChange(e: any) {
    if (e.target.value) {
    }
  }

  updateToDo(updatedToDo: ToDo) {
    this.store.dispatch(
      TodosActions.updateToDo({
        payload: updatedToDo,
      })
    );
  }

  deleteToDo(id: string) {
    this.store.dispatch(
      TodosActions.deleteToDo({
        payload: id,
      })
    );
  }

  logoutUser() {
    this.auth.signOut();
  }
}
