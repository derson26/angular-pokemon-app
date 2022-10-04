import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of, Subject } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { HttpErrorResponse } from '@angular/common/http';

interface IErrorMessage {
  message?:string;
}

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  pokemon$?:Observable<any>;
  error$?:Subject<HttpErrorResponse> = new Subject<HttpErrorResponse>();

  constructor( private _service: PokemonService) {}

  ngOnInit(): void {
    this.listAllPokemon()
  }

  // List All Pokemon
  public listAllPokemon(): void{
    this.pokemon$ = this._service.listAllPokemon()
      .pipe(
        catchError((error)=>{
          this.error$?.next(error)
          console.log("error", error)
          return of()
        })
      )
  }

}
