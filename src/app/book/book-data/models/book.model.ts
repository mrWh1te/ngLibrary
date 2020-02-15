export interface BookInterface {
  id: number
  isbn: string
  title?: string
  author?: string
  genre?: string
  summary?: string
  description?: string
  released?: Date
  cover?: {small: string, medium: string, large: string}
  authors?: {name: string}[]
}

export class Book implements BookInterface {

  constructor(
    public id: number,
    public isbn: string,
    public title?: string,
    public author?: string, // @future make this an Author ID with new Author model, then hydrate downstream
    public genre?: string, // @future make this a Genre ID with new Genre model, allows easier filtering, etc
    public summary?: string,
    public description?: string,
    public released?: Date,
    public cover?: {small: string, medium: string, large: string},
    public authors?: {name: string}[]
  ) {}
  
  static fromJson(json: Partial<Book>): Book {
    return new Book(
      json.id,
      json.isbn,
      json.title,
      json.author,
      json.genre,
      json.summary,
      json.description,
      json.released,
      json.cover
    )
  }
}