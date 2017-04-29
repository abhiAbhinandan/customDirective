import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class AttributeDirective {
   @Input() defaultColor: string;

@Input('myHighlight') highlightColor: string;
  constructor(private el:ElementRef) { 
    // el.nativeElement.style.backgroundColor='red';
  }
  @HostListener('mouseenter') onmouseenter(){
    this.hightLight(this.highlightColor ||this.defaultColor||'yellow');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.hightLight(null);
  }
  private hightLight(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }

}
