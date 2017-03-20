export class User {
  id: string;
  email: string;
  token: string;

  constructor(id: string, email: string, token: string) {
    this.id = id;
    this.email = email;
    this.token = token;
  }
}
