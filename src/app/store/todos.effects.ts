import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../services/api.service';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ToDo } from '../models';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[TODO] Load Todos'),
      mergeMap(() =>
        this.apiService.loadToDos().pipe(
          map((todos) => ({ type: '[TODO] Loading Todos Successful', todos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addToDo$ = createEffect(() => 
      this.actions$.pipe(
        ofType('[TODO] Add Todo'),
        mergeMap(({payload}) =>
        this.apiService.addToDo(payload).pipe(
          map((res) => {
            return ({type: '[TODO] Adding Todo Successful'})
          }),
          catchError(() => EMPTY)
        ))
      )
  );

  deleteToDo$ = createEffect(() =>
  this.actions$.pipe(
    ofType('[TODO] Delete Todo'),
    mergeMap(({payload}) => 
    this.apiService.deleteToDo(payload).pipe(
      map((res) => {
        res.forEach(doc => doc.ref.delete())
        return ({type: '[TODO] Deleting Todo Successful'})
      }),
      catchError(() => EMPTY)
    ))
  ))


  updateToDo$ = createEffect(() =>
  this.actions$.pipe(
    ofType('[TODO] Update Todo'),
    mergeMap(({payload}: {payload: ToDo}) => 
    this.apiService.updateToDo(payload.id).pipe(
      map((res) => {
        res.forEach(doc => doc.ref.update(payload))
        return ({type: '[TODO] Updating Todo Successful'})
      }),
      catchError(() => EMPTY)
    ))
  ))
}
