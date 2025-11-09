import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appTypewriter]',
  standalone: true,
})
export class TypewriterDirective implements AfterViewInit {
  @Input() text: string = ''; // tekst do wyświetlenia
  @Input() speed: number = 80; // prędkość pisania (ms)

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const element = this.el.nativeElement as HTMLElement;
    element.textContent = ''; // wyczyść zawartość

    let i = 0;
    const type = () => {
      if (i < this.text.length) {
        element.textContent += this.text.charAt(i);
        i++;
        setTimeout(type, this.speed);
      }
    };

    type();
  }
}
