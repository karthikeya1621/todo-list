import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signUp } from './auth/store/actions/signup.actions';
import { User } from './auth/store/models/signup.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';

  constructor(private store: Store<User[]>) {
  }
}
