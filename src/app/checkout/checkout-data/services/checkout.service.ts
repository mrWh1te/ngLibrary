import { Injectable } from "@angular/core"

import { Observable, of } from 'rxjs'
import { delay } from 'rxjs/operators'

import { User } from '../models/user.model'

@Injectable()
export class CheckoutService {
  submitToAPI(bookIds: number[], user: Partial<User>): Observable<any> {
    // we don't have an actual backend to process the checkout request, so this is pretend:
    return of().pipe(
      delay(100) // simulate API response time, 100ms ?
    )
  }
}