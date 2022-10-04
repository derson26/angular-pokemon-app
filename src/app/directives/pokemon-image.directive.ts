import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { getUrl, leadingZero } from '../functions';

@Directive({
  selector: '[D-Change-Src]'
})
export class PokemonImageDirective implements OnInit{
  private _src?:string;
  @Input() index!:number;

  constructor() {}

  ngOnInit(): void {
    this.card_image(this.index);
  }

  // HostBinding
  @HostBinding('attr.src') get src(){
    return this._src;
  };

   //show images in card Body and and change image background
   private card_image(_id:number | string) {

    let incrementId = Number(_id) +  1;
    //leading Zero function, e.g. 1 = 001, 10 = 010
    let convertId = leadingZero(incrementId);
    // this.styled(convertId);

    this._src = getUrl(convertId);
  }
}
