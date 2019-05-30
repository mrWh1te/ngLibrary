import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Book } from 'src/app/book/book-data/models/book.model'

// @todo
// UI with cards where each card takes up like 25% for gutter and stuff so like 4 / row

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooksData(books: {id: number, isbn: string}[]): Observable<Book[]> {
    return this.http.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${books.map(book => book.isbn).join()}&format=json&jscmd=data`)
      .pipe(
        map((openLibraryBooksAPIResponse: any) => {
          // hydrate this API response data with out corresponding book ID's
          let normalizedResponse: Book[] = []

          for (let responseObjectKey in openLibraryBooksAPIResponse) {
            // 2 formats for the key, one is "ISBN:0923409234" and the other is the plain ISBN number "0923409234"
            let isbn: string = responseObjectKey

            if (responseObjectKey[0] === 'I' && responseObjectKey[1] === 'S' && responseObjectKey[2] === 'B' && responseObjectKey[3] === 'N' && responseObjectKey[4] === ':') {
              isbn = responseObjectKey.substr(5)
            }
            
            let book = books.find(book => book.isbn === isbn)

            normalizedResponse.push({
              id: book.id,
              ...openLibraryBooksAPIResponse[responseObjectKey]
            })
          }

          return normalizedResponse
        })
      )
  }
}