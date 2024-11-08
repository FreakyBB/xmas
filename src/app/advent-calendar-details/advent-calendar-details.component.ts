import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AdventDoor, adventDoors } from '../data/calendar';

@Component({
    selector: 'app-advent-calendar-details',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './advent-calendar-details.component.html',
    styleUrl: './advent-calendar-details.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventCalendarDetailsComponent implements OnInit {
    door!: AdventDoor;

    constructor(private readonly route: ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params['uuid'];
        this.door = this.findDayById(id);
    }

    findDayById(id: string): AdventDoor {
        return adventDoors.find((x) => x.uuid === id)!;
    }
}
