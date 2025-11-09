import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ScrollAnimDirective } from '../directives/scroll-anim';

@Component({
  selector: 'app-contact',
  imports: [MatCardModule, MatButtonModule, ScrollAnimDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
