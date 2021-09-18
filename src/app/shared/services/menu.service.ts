import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PATHS } from 'src/app/shared/paths';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getAllMeals():Observable<any>{
    return this.http.get(PATHS.menu);
  }



  getMeal(id: number): Observable<Menu | undefined> {
    return this.getAllMeals()
      .pipe(
        map((products: Menu[]) => products.find(p => p.id === id))
      );
  }

  // private handleError(err: HttpErrorResponse): Observable<never> {
  //   let errorMessage = '';
  //   if (err.error instanceof ErrorEvent) {
  //     errorMessage = `An error occurred: ${err.error.message}`;
  //   } else {
  //     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }

}
