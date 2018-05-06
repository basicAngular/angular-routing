import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { IUser } from '../shared/user';


@Injectable()
export class UsersService {
  private _url: string = "assets/data/user.json";
  constructor(private http: HttpClient) { }

  getUser(): Observable<IUser[]> {
      return this.http.get<IUser[]>(this._url)
                      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.message || "server Error");
  }
}
