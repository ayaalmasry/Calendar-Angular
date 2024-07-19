import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calendar App';
  meetings = {
    '2024-07-26': ['Dring Coffee', 'Learn React', 'Sleep'],
    '2024-08-03': ['Dring Coffee', 'Learn Angular', 'Sleep'],
  };
}