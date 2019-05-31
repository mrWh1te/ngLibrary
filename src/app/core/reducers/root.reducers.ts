import { routerReducer } from '@ngrx/router-store'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

import { RootState } from './root.state'

export const reducers: ActionReducerMap<RootState> = {
  router: routerReducer
}

export const selectRouter = createFeatureSelector('router')