import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-advent-calendar-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './advent-calendar-details.component.html',
  styleUrl: './advent-calendar-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventCalendarDetailsComponent { }
