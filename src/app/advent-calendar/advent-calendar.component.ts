import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdventCalendarDoorComponent } from '../advent-calendar-door/advent-calendar-door.component';
import { AdventDoor, adventDoors } from '../data/calendar';



@Component({
  selector: 'app-advent-calendar',
  standalone: true,
  imports: [CommonModule, AdventCalendarDoorComponent],
  templateUrl: 'advent-calendar.component.html',
  styleUrl: './advent-calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventCalendarComponent {

  days: AdventDoor[] = adventDoors;

}
