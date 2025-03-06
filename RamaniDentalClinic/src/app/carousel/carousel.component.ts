import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ac-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentIndex: number = 0;
  shouldAnimate: boolean = false;
  private autoSlideInterval: any;

  images = [
    { url: '/clinic-pics/outside-board.jpg', alt: 'Image 1' },
    { url: '/clinic-pics/chair.jpg', alt: 'Image 2' },
    { url: '/clinic-pics/certificate-1.jpg', alt: 'Image 3' },
    { url: '/clinic-pics/certificate-2.jpg', alt: 'Image 4' },
    { url: '/clinic-pics/certificate-3.jpg', alt: 'Image 5' },
    { url: '/clinic-pics/certificate-4.jpg', alt: 'Image 6' },
    { url: '/clinic-pics/glass-logo.jpg', alt: 'Image 7' },
    { url: '/clinic-pics/brush-your-teeth.jpg', alt: 'Image 8' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    this.shouldAnimate = true;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.resetAutoSlide();
  }

  previousSlide(): void {
    this.shouldAnimate = true;
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.resetAutoSlide();
  }

  goToSlide(index: number): void {
    this.shouldAnimate = true;
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  private resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
