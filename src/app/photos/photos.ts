import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos.html',
  styleUrls: ['./photos.css'],
})
export class CarouselComponent {
  images: string[] = [
    '/2.jpeg',
    '/3.jpeg',
    '/4.jpeg',
    '/5.jpeg',
    '/6.jpeg',
    '/7.jpeg',
    '/8.jpeg',
    '/9.jpeg',
    '/10.jpeg',
    '/11.jpeg',
    '/21.jpeg',
    '/image0.png',
    '/image1.jpeg',
    '/image2.jpeg',
    '/image3.jpeg',
    '/image4.jpeg',
    '/image5.jpeg',
    '/image6.jpeg',
    '/image7.jpeg',
    '/image8.jpeg',
    '/image9.jpeg',
    '/image10.jpeg',
    '/image11.jpeg',
    '/image12.jpeg',
    '/image13.jpeg',
    '/image14.jpeg',
    '/image15.jpeg',
    '/image16.jpeg',
    '/image17.jpeg',
    '/image18.jpeg',
    '/image20.jpeg',
  ];

  currentIndex: number = 0;
  thumbnailStart: number = 0;
  visibleThumbnails: number = 5;

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.adjustThumbnails();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.adjustThumbnails();
  }

  goTo(index: number) {
    this.currentIndex = index;
    this.adjustThumbnails();
  }

  prevThumbs() {
    this.thumbnailStart = Math.max(this.thumbnailStart - 1, 0);
  }

  nextThumbs() {
    this.thumbnailStart = Math.min(
      this.thumbnailStart + 1,
      this.images.length - this.visibleThumbnails
    );
  }

  private adjustThumbnails() {
    if (this.currentIndex < this.thumbnailStart) {
      this.thumbnailStart = this.currentIndex;
    } else if (
      this.currentIndex >=
      this.thumbnailStart + this.visibleThumbnails
    ) {
      this.thumbnailStart = this.currentIndex - this.visibleThumbnails + 1;
    }
  }

  get visibleImages() {
    return this.images.slice(
      this.thumbnailStart,
      this.thumbnailStart + this.visibleThumbnails
    );
  }
}
