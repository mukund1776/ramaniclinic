import { Component } from '@angular/core';

const IMAGE_URLS = [
  '/clinic-pics/outside-board.jpg',
  '/clinic-pics/chair.jpg',
  '/clinic-pics/certificate-1.jpg',
  '/clinic-pics/certificate-2.jpg',
  '/clinic-pics/certificate-3.jpg',
  '/clinic-pics/certificate-4.jpg',
  '/clinic-pics/glass-logo.jpg',
  '/clinic-pics/brush-your-teeth.jpg',
];

@Component({
  selector: 'ac-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  imageIndex = 0;
  IMAGE_URLS = IMAGE_URLS;

  goToPreviousImage() {
    if (this.imageIndex === 0) {
      this.imageIndex = IMAGE_URLS.length - 1;
    } else {
      this.imageIndex--;
    }
  }

  goToNextImage() {
    if (this.imageIndex === IMAGE_URLS.length - 1) {
      this.imageIndex = 0;
    } else {
      this.imageIndex++;
    }
    console.log(this.imageIndex);
  }
}
