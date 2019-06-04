// @future if we add NestJs for angular-universal, and some partial backend, then lets refactor this model into its own module

export class User {
  constructor(
    public first_name: string,
    public last_name: string,
    public library_card_id: string
  ) {}

  static fromJson(json: Partial<User>): User {
    return new User(
      json.first_name,
      json.last_name,
      json.library_card_id
    )
  }

  get name(): string {
    return (this.first_name !== '' ? this.first_name + ' ' : '') + this.last_name !== '' ? this.last_name.charAt(0) + '.' : ''
  }
}