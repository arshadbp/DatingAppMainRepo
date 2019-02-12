import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  baseURL = "http://localhost:5001/api/auth/";
  login(model: any) {
    return this.http.post(this.baseURL + "login", model).pipe(
      map((response: any) => { 
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
        }
      })
    );
  }
}
