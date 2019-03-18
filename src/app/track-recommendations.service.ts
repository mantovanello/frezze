import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TrackRecommendation } from './track-recommendation'

@Injectable({
  providedIn: 'root'
})
export class TrackRecommendationsService {

  private trackRecommendationsUrl = 'https://api-frezze.herokuapp.com/list-recommendations/';

  constructor(private http: HttpClient) { }

  getTrackRecommendations(): Observable<TrackRecommendation[]> {
    /**
     * Invoke Frezze API List Recommendations Endpoint
     */
    return this.http.get<TrackRecommendation[]>(this.trackRecommendationsUrl)
    .pipe(
      catchError(this.handleError<TrackRecommendation[]>('getTrackRecommendations', []))
    );
    
  }

  /**
   *  Handle Http operation that failed.
   *  Let the app continue.
   *  @param operation - name of the operation that failed
   *  @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      /** 
       * Send the error to remote logging infrastructure
       */ 
      console.error(error); // log to console instead

      /**
       * Let the app keep running by returning an empty result
       */
      return of(result as T);
    };
  }
}
