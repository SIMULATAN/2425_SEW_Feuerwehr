import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "incidents",
    component: IncidentListComponent,
  },
  {
    path: "incidents/:id",
    component: IncidentDetailsComponent,
  },
  {
    path: "vehicles",
    component: VehicleListComponent,
  },
  {
    path: "vehicles/:id",
    component: VehicleDetailsComponent,
  },
];
