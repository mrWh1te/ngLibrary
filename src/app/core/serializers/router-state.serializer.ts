import { Params, RouterStateSnapshot } from '@angular/router'
import { RouterStateSerializer } from '@ngrx/router-store'
import { Injectable } from "@angular/core";

export interface RouterSimpleState {
  url: string
  params: Params
  queryParams: Params
}

@Injectable()
export class RouterSimpleStateSerializer implements RouterStateSerializer<RouterSimpleState> {
  serialize(routerState: RouterStateSnapshot): RouterSimpleState {
    let route = routerState.root

    while (route.firstChild) {
      route = route.firstChild
    }

    const {
      url,
      root: { queryParams }
    } = routerState

    const params = { ...route.params}
  
    return { 
      url, 
      params, 
      queryParams 
    }
  }
}
