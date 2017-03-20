export class User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  token: string;
  created_at: string;
  updated_at: string;
  is_subscribed: boolean;
  rights: string;

  constructor(id: string,
              firstname: string,
              lastname: string,
              email: string,
              token: string,
              created_at: string,
              updated_at: string,
              is_subscribed: boolean,
              rights: string)
  {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.token = token;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.is_subscribed = is_subscribed;
    this.rights = rights;
  }
}
