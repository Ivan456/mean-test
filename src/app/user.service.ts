import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class userService {

  uri = '/user';
  // uri = 'http://localhost:4000/user';

  constructor(private http: HttpClient) { }

  adduser(first_name, last_name, email) {
    const obj = {
      first_name: first_name,
      last_name: last_name,
      email: email
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getusers(searchValue = '') {
    const query = searchValue ? `?searchValue=${searchValue}` : '';
    return this
           .http
           .get(`${this.uri}${query}`);
  }

  edituser(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateuser(first_name, last_name, email, id) {

    const obj = {
        first_name: first_name,
        last_name: last_name,
        email: email
      };
    return this
      .http
      .post(`${this.uri}/update/${id}`, obj)
  }

 deleteuser(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
