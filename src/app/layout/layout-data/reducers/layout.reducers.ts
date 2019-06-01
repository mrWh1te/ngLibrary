import { RootState } from '../../../core/reducers/root.state'
import * as fromLayoutStatus from './layout-status.reducer'

export interface LayoutState {
  status: fromLayoutStatus.State
}

export interface State extends RootState {
  layout: LayoutState
}

export const reducers = {
  status: fromLayoutStatus.reducer
}
