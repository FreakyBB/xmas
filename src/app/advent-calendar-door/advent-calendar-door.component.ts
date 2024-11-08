import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AdventDoor } from '../data/calendar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-advent-calendar-door',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './advent-calendar-door.component.html',
    styleUrl: './advent-calendar-door.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventCalendarDoorComponent {
    constructor(private router: Router) {}

    currentDay = new Date().getDate(); // aktuelles Tagesdatum
    @Input({ required: true }) door!: AdventDoor;

    openDoor(door: AdventDoor) {
        if (this.currentDay >= door.day) {
            door.isOpen = !door.isOpen; // Set door as open
            setTimeout(() => {
                this.navigate(door.uuid);
            }, 1000); // Nach der Animation (1 Sekunde Verzögerung)
        } else {
            alert('You can’t open this door yet!');
        }
    }

    navigate(id: string): void {
        this.router.navigate(['/door', id]); // Weiterleitung zur Detailseite
    }
}
