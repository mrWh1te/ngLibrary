export class Book {
  id: number
  title?: string
  author?: string // @future make this an Author ID with new Author model, then hydrate downstream
  genre?: string // @future make this a Genre ID with new Genre model, allows easier filtering, etc
  isbn: string
  summary?: string
  description?: string
  released?: Date
  photo?: string
}