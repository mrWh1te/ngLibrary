import { ComponentFixture } from '@angular/core/testing'

import { StoreModule, Store, combineReducers } from '@ngrx/store'

import * as fromBooks from '../../../../books-data/reducers/books.reducers'
import * as booksActions from '../../../../books-data/actions/books.actions'

import { ConfigureFn, configureTests } from './../../../../../../../jest/config.helpers'
import { BooksComponent } from './books.component'
import * as seed from './../../../../books-data/book-isbns.seed.json'
const bookISBNs = seed.bookISBNs

import { MockComponent } from './../../../../../../../jest/mocks.helpers'

describe('BooksComponent', () => {
  let fixture: ComponentFixture<BooksComponent>
  let component: BooksComponent
  let store: Store<fromBooks.State>

  beforeEach(() => {
    const configure: ConfigureFn = testBed => {
      testBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({
            books: combineReducers(fromBooks.reducers),
          }),
        ],
        declarations: [
          BooksComponent,
          MockComponent('books-ui', {inputs: ['books']})
        ]
      })
    }

    configureTests(configure).then(testBed => {
      // Setting up Store service for spying (testing)
      store = testBed.inject(Store)
      spyOn(store, 'dispatch').and.callThrough()

      // actually create an instance of the component and run initial bootstrap
      fixture = testBed.createComponent(BooksComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })
  })

  it('should create an instance of', () => {
    expect(component).toBeTruthy()
  })

  it('should dispatch an action to load data when created', () => {
    const action = booksActions.requestBooksHydrate()
 
    expect(store.dispatch).toHaveBeenCalledWith(action)
  })

  // @todo 
  // Not covered is the Effect for which will pull data from store based on bookISBNs to 
  // call OpenLibrary API

  it('should have 1 Book for each ISBN in our bookISBNs seed', () => {
    const booksSeed = bookISBNs.map((isbn, index) => ({id: index+1, isbn}))
 
    component.books$.subscribe(books => {
      expect(books.length).toBe(booksSeed.length)
    })
  })

  it('should hydrate 3 books based on bookISBNs (first 3) seed with additional information such as title and authors array', () => {
    const booksSeed = [
      {
        id: 1,
        isbn: bookISBNs[0],
        title: 'Test Title 1',
        authors: [
          {
            name: 'Test Author 1'
          }
        ]
      },
      {
        id: 2,
        isbn: bookISBNs[1],
        title: 'Test Title 2',
        authors: [
          {
            name: 'Test Author 2'
          }
        ]
      },
      {
        id: 3,
        isbn: bookISBNs[2],
        title: 'Test Title 3',
        authors: [
          {
            name: 'Test Author 3'
          }
        ]
      }
    ]

    const action = booksActions.requestBooksHydrateSuccess({books: booksSeed})
    store.dispatch(action)
 
    component.books$.subscribe(books => {
      expect(books[0].title).toBe('Test Title 1')
      expect(books[0].authors[0].name).toBe('Test Author 1')

      expect(books[1].title).toBe('Test Title 2')
      expect(books[1].authors[0].name).toBe('Test Author 2')

      expect(books[2].title).toBe('Test Title 3')
      expect(books[2].authors[0].name).toBe('Test Author 3')
    })
  })
})