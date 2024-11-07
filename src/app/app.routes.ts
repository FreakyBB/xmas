import { Routes } from '@angular/router';
import { AdventCalendarDetailsComponent } from './advent-calendar-details/advent-calendar-details.component';
import { AdventCalendarComponent } from './advent-calendar/advent-calendar.component';

export const routes: Routes = [
    { path: 'door/:uuid', component: AdventCalendarDetailsComponent },
    { path: 'calendar', component: AdventCalendarComponent},
    { path: '', redirectTo: '/calendar', pathMatch: 'full' }
];
