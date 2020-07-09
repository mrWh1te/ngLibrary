import { merge, pick } from 'lodash-es'

import { ActionReducer, Action } from '@ngrx/store'

import { LocalStorageService } from '../services/local-storage.service'

/**
 * @description    On initial load of the app (or intial state reduce), merge what's in local storage for the app's main store data into the local store (to restore what was)
 *                 then on subsequent state changes, save from the app's state (based on the state feature keys provided), what to store in local storage for later restore
 * @param stateFeatureKeys Keys from the Root State of State Features to Sync between the App's Local Store & Local Storage
 * @param storageService Wrapper Service for a local storage system
 */
export const syncStateWithLocalStorageMetaReducer = <S, A extends Action = Action>(stateFeatureKeys: string[], storageService: LocalStorageService) => {
  let hasInitLocalStore = false

  return (reducer: ActionReducer<S, A>) => {

    return (state: S, action: A): S => {
      const nextState = reducer(state, action)

      if (!hasInitLocalStore) {
        hasInitLocalStore = true
        const savedState = storageService.getState()
        return merge(nextState, savedState)
      }

      const stateToStore = pick(nextState, stateFeatureKeys)
      storageService.storeState(stateToStore)

      return nextState
    }
  }
}