import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User2 } from './user2';
import { Observable, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService {

  constructor(private http: HttpClient) {
    super(false, '');
   }

  register(user2: User2): Observable<any> {
    return this.http.post<any>(environment.urlHost + 'auth/register', user2).pipe(
      tap(() => {
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError)
    );
  }

  logout(): void {
    this.currentUserLoginOn.next(false);
  }
}
