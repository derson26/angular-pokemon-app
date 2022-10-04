import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _url:string = `https://pokeapi.co/api/v2/pokemon?limit=151`

  constructor(private http: HttpClient) { }

  public listAllPokemon(){
    return this.http.get<any>(this._url,).pipe(
      catchError((this.handleError))
    )
  }

  private handleError(err: HttpErrorResponse){
    // just a test ... more could would go here
    return throwError(() => err);
  }
}
