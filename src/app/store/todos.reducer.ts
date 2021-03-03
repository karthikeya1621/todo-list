import { Action, createReducer, on } from "@ngrx/store";
import { ToDo } from "../models";
import * as TodosActions from './todos.actions'

export const initialState: ToDo[] = []

const todosReducer = createReducer(
    initialState,
    on(TodosActions.loadToDosSuccess, (todos, payload) => ([...payload.todos].sort((a, b) => (a.createdAt - b.createdAt)))),
    on(TodosActions.clearToDoState, (todos) => ([]))
)

export function reducer(todos: ToDo[] | [], action: Action) {
    return todosReducer(todos, action)
}