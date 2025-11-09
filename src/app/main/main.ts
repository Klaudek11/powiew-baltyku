import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-main',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
