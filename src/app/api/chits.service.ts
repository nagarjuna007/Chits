import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/internal/operators/tap";

@Injectable({
  providedIn: "root"
})
export class ChitsService {
  constructor(private http: HttpClient) { }
  URL = "https://chit-services.herokuapp.com/chit/api/v1/chit/";
  getChittiURL = "user/";
  TOKEN = "5e9c17036bf4e37664eba7a6";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  getChittiDetails(): Observable<any> {
    return this.http.get(this.URL + this.getChittiURL + this.TOKEN);
  }
  getSingleChittiDetails(token): Observable<any> {
    return this.http.get(this.URL + token);
  }
  postChitti(data): Observable<any> {
    return this.http.post(this.URL, data).pipe();
  }
  updateChit(data): Observable<any> {
    return this.http.put(this.URL, data).pipe();
  }
  deleteChit(id) {
    return this.http.delete(this.URL + id);
  }
  getChits(query) {
    return this.http.post("https://chit-services.herokuapp.com/chit/api/v1/chit/query", query);
  }
  searchMember(data): Observable<any> {
    return this.http
      .post("https://chit-services.herokuapp.com/chit/api/v1/user/query", data)
      .pipe(tap(result => result), catchError(error => throwError(error)));
  }
}
