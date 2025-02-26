import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventRegistrationComponent } from './event-registration/event-registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
  EventRegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_mat_challenge';
}
