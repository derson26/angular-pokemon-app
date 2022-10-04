import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  pokemon$?:Observable<any>;

  constructor( private _service: PokemonService) {

   }

  ngOnInit(): void {
    this.pokemon$ = this._service.listAllPokemon();
    // .subscribe({
    //   next:(pokemon)=>{
    //     console.log(pokemon.results)
    //   }
    // }
    //)
  }

}
