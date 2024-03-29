import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  searchMember(query) {
    return this.http.post("https://chit-services.herokuapp.com/chit/api/v1/user/query", query);
  }

  createUser(data) {
    return this.http.post("https://chit-services.herokuapp.com/chit/api/v1/user", data);
  }

  async searchUser(query) {
    let data = await this.http.post("https://chit-services.herokuapp.com/chit/api/v1/user/query", query).toPromise();
    return data;
  }
}
