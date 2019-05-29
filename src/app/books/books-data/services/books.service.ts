import { Injectable } from "@angular/core";

// @todo make the default state of the books entity feature have these ISBN's
// Then we need an action to HydrateBooksRequest, Effect -> service call -> Success || Error event actions
// Success event reduce the actual update on entities
// Try: https://openlibrary.org/api/books?bibkeys=ISBN:0451526538,0439554934
// Then selectors -> grab the books
// Books component smart into UI
// UI 2 column (left scrolls of books), right col empty until 1 active book (selected 1 book)
// 2/3  | 1/3
// UI with cards where each card takes up like 25% for gutter and stuff so like 4 / row
const bookISBNs: string[] = ['0451526538', '0439554934']

@Injectable()
export class BooksService {

}