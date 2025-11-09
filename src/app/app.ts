import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero/hero';
import { Description } from './description/description';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { Main } from './main/main';
import { CarouselComponent } from './photos/photos';
import { HeroIcons } from './hero-icons/hero-icons';
import { Attractions } from './attractions/attractions';
import { Opinions } from './opinions/opinions';
import { Nav } from './nav/nav';

@Component({
  selector: 'app-root',
  imports: [
    Nav,
    Attractions,
    Opinions,
    Hero,
    HeroIcons,
    Description,
    Contact,
    Footer,
    Main,
    CarouselComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('powiew_baltyku');
}
