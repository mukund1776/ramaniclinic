import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
