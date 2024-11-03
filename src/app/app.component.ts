import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdventCalendarComponent } from "./advent-calendar/advent-calendar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdventCalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'xmas';
}
