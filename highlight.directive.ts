import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor ="pink";
   }
@Input () defaultColor: string;
@Input ('appHighlight') highlightColor:string;
@Input ('apphighlightimage') img:string;
@HostListener('mouseenter')onMouseEnter() { 
  this.highlight(this.highlightColor || this.defaultColor || 'red');
}
  @HostListener('mouseleave')onMouseLeave() { 
    this.highlight(null);
  }
    @HostListener('dragevent')onDragEvent() { 
}

private highlight(color:string){
  this.el.nativeElement.style.backgroundColor ="yellow";
}

}
