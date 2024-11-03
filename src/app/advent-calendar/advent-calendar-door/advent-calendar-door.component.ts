import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AdventDoor } from '../calendar';


@Component({
  selector: 'app-advent-calendar-door',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advent-calendar-door.component.html',
  styleUrl: './advent-calendar-door.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventCalendarDoorComponent {

  currentDay = new Date().getDate(); // aktuelles Tagesdatum
  @Input({ required: true }) door!: AdventDoor;

  openDoor(door: AdventDoor) {
    if (this.currentDay >= door.day) {
      door.isOpen = !door.isOpen; // Set door as open
    } else {
      alert('You can’t open this door yet!');
    }
  }
}
