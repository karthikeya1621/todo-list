import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { StateService } from 'src/app/services/state.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  newTask = new FormControl('', Validators.required);
  toDos$ = this.state._toDos$;

  constructor(private state: StateService) {}

  ngOnInit(): void {}

  addTask() {
    this.newTask.markAsTouched();
    if (this.newTask.valid) {
      this.state.addToDo({
        id: v4(),
        title: this.newTask.value,
        isDone: false,
        createdAt: Date.now(),
        userId: '1',
      });
      this.newTask.setValue('');
    }
  }

  inputChange(e: any) {
    if (e.target.value) {
    }
  }
}
