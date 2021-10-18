import { Injectable } from '@angular/core';
import { Resident } from './residents/resident.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  url = 'http://localhost:8080/residents';

  constructor(private http: HttpClient) { }

  //headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getResidents(): Observable<Resident[]> {
    return this.http.get<Resident[]>(this.url)
      .pipe(retry(2),
        catchError(this.handleError)
      );
  }

  saveResidents(resident: Resident): Observable<Resident> {

    return this.http.post<Resident>(this.url, JSON.stringify(resident), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

  deleteResident(resident: Resident) {
    return this.http.delete<Resident>(`${this.url + '/' + resident.id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updateResident(resident: Resident): Observable<Resident> {
    return this.http.put<Resident>(this.url + '/' + resident.id, JSON.stringify(resident), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }






}



