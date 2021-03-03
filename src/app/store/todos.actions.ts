import { createAction, props } from "@ngrx/store";
import { ToDo } from "../models";


export const loadToDos = createAction(
    '[TODO] Load Todos'
)

export const loadToDosSuccess = createAction(
    '[TODO] Loading Todos Successful',
    props<{todos: ToDo[]}>()
)


export const loadToDosFailure = createAction(
    '[TODO] Loading Todos Failed'
)

export const addToDo = createAction(
    '[TODO] Add Todo',
    props<{payload: ToDo}>()
)

export const addToDoSuccess = createAction(
    '[TODO] Adding Todo Successful'
)

export const addToDoFailure = createAction(
    '[TODO] Adding Todo Failed'
)

export const deleteToDo = createAction(
    '[TODO] Delete Todo',
    props<{payload: string}>()
)

export const deleteToDoSuccess = createAction(
    '[TODO] Deleting Todo Successful'
)

export const deleteToDoFailure = createAction(
    '[TODO] Deleting Todo Failed'
)


export const updateToDo = createAction(
    '[TODO] Update Todo',
    props<{payload: ToDo}>()
)

export const updateToDoSuccess = createAction(
    '[TODO] Updating Todo Successful'
)

export const updateToDoFailure = createAction(
    '[TODO] Updating Todo Failed'
)


export const clearToDoState = createAction(
    '[TODO] Clear ToDos State'
)
