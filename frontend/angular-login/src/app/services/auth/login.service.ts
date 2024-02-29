import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import  {  Observable, throwError, catchError, BehaviorSubject , tap, map} from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService{

  

  constructor(private http: HttpClient) {   
    super(sessionStorage.getItem("token") !== null, sessionStorage.getItem("token") || "");  
  }

  login(credentials:LoginRequest):Observable<any>{
    return this.http.post<any>(environment.urlHost+"auth/login",credentials).pipe(
      tap( (userData) => {
        sessionStorage.setItem("token", userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
      }),
      map((userData)=> userData.token),
      catchError(this.handleError)
    );
  }

  logout():void{
    sessionStorage.removeItem("token");
    this.currentUserLoginOn.next(false);
  }

  

  get userData():Observable<String>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

  get userToken():String{
    return this.currentUserData.value;
  }

}
