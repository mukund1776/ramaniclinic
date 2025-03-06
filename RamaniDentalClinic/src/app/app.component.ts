import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from "./services/services.component";

@Component({
  selector: 'ac-root',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RamaniDentalClinic';

  ngOnInit() {
  //   document.getElementById('contact-form').addEventListener('submit', function(event) {
  //     event.preventDefault();
  //     alert('Thank you for your message! We will get back to you soon.');
  // });
  }
}
