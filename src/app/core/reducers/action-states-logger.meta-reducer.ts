import { ActionReducer } from '@ngrx/store'

export function actionStatesLogger(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    const currentState = state
    const nextState = reducer(currentState, action)

    console.group(action.type)
    console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state)
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action)
    console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState)
    console.groupEnd()

    return nextState
  }
}