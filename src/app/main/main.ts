import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ScrollAnimDirective } from '../directives/scroll-anim';

@Component({
  selector: 'app-main',
  imports: [MatCardModule, MatButtonModule, ScrollAnimDirective],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
