import { Component } from '@angular/core';
import { ScrollAnimDirective } from '../directives/scroll-anim';
import { TypewriterDirective } from '../directives/typewriter';

@Component({
  selector: 'app-hero-icons',
  standalone: true,
  imports: [ScrollAnimDirective, TypewriterDirective],
  templateUrl: './hero-icons.html',
  styleUrl: './hero-icons.css',
})
export class HeroIcons {}
