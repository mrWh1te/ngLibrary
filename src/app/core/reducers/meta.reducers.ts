import { MetaReducer } from '@ngrx/store'

import { RootState } from './root.state'

import { actionStatesLogger } from './action-states-logger.meta-reducer'
import { syncStateWithLocalStorageMetaReducer } from './sync-state-with-local-storage.meta-reducer'
import { LocalStorageService } from '../services/local-storage.service'

/**
 * @description   Using a function to return the meta reducers array for leveraging Angular Dependency Injection (LocalStorageService)
 * @param storageService 
 */
export const metaReducersFactory = (storageService: LocalStorageService): MetaReducer<RootState>[] => 
  [actionStatesLogger, syncStateWithLocalStorageMetaReducer(['books', 'cart', 'checkout'], storageService)]