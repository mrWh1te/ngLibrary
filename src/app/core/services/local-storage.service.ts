import { Injectable, InjectionToken, Inject } from '@angular/core'
import { RootState } from '../reducers/root.state'

// Handling an implicit dependency, from a browser API
export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
})

const localStorageAppStateKey = 'APP-STATE'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // Code can now plug in other storage mechanisms, as long as the interface is the same (setItem() & getItem())
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}
  
  storeState = (state: RootState, key: string = localStorageAppStateKey): void =>
    this.storage.setItem(key, JSON.stringify(state))

  getState = (key: string = localStorageAppStateKey): RootState =>
    JSON.parse(this.storage.getItem(key))
  
}