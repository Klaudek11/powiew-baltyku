import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appScrollAnim]',
  standalone: true,
})
export class ScrollAnimDirective implements AfterViewInit {
  @Input() direction: 'left' | 'right' = 'right';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      const element = this.el.nativeElement;
      this.renderer.addClass(element, 'scroll-anim');
      this.renderer.addClass(
        element,
        this.direction === 'left' ? 'from-left' : 'from-right'
      );
      this.renderer.addClass(element, 'show');
      return;
    }

    const element = this.el.nativeElement;
    this.renderer.addClass(element, 'scroll-anim');
    this.renderer.addClass(
      element,
      this.direction === 'left' ? 'from-left' : 'from-right'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(element, 'show');
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
  }
}
