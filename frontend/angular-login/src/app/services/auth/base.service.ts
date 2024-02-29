import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class BaseService {
  currentUserLoginOn: BehaviorSubject<boolean>;
  currentUserData: BehaviorSubject<string>;

  constructor(initialLoginState: boolean, initialUserData: string) {
    this.currentUserLoginOn = new BehaviorSubject<boolean>(initialLoginState);
    this.currentUserData = new BehaviorSubject<string>(initialUserData);
  }
  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error('Se ha producido un error ', error.error);
    } else {
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente.'));
  }
}