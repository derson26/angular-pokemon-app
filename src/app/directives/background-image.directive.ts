import { Directive, HostBinding, Input, OnInit, ElementRef, Renderer2} from '@angular/core';
import { getUrl, leadingZero } from '../functions';

@Directive({
  selector: '[D-Change-Background-Image]'
})
export class BackgroundImageDirective implements OnInit{
  @Input() index!:number;
  private _background_image?:string;

  constructor( private _elementRef: ElementRef, private _renderer: Renderer2) {}

  ngOnInit(): void {
    this.card_image(this.index);
  }

  //show images in card Body and and change image background
  private card_image(_id:number | string) {

    let incrementId = Number(_id) +  1;
    //leading Zero function, e.g. 1 = 001, 10 = 010
    let convertId = leadingZero(incrementId);
    // this.styled(convertId);

    this._background_image = 'url(' + getUrl(convertId) + ')';
    this._renderer.setStyle(this._elementRef.nativeElement, "background-image", this._background_image);
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-size', "cover");

  }
}
