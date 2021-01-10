import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {DateRange, Score, ScoresResponse} from './types';
import { MessageService } from '../../message.service';

@Injectable({ providedIn: 'root' })
export class ScoresService {

  private competitionsUrl = 'https://api.football-data.org/v2/competitions';  // URL to web api

  headers= new HttpHeaders({ 
    'X-Auth-Token': '4ae8565177dc4711b4144baa0d7a5349', 
  })
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getScores(id: number, date?: DateRange): Observable<ScoresResponse> {
    return this.http.get<any>(`${this.competitionsUrl}/${id}/matches`, {
      headers: this.headers,
      params: date,
    })
      .pipe(
        catchError(this.handleError<ScoresResponse>('deleteHero'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
