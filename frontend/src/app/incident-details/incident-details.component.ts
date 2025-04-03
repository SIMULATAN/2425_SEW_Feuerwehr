import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IncidentWithRadioMessagesDTO } from '../types';
import { ActivatedRoute } from '@angular/router';
import { RadiomessageListComponent } from '../radiomessage-list/radiomessage-list.component';
import { IncidentSocketService } from '../incident-socket.service';

@Component({
  selector: 'app-incident-details',
  imports: [
    RadiomessageListComponent
  ],
  templateUrl: './incident-details.component.html',
  styleUrl: './incident-details.component.css'
})
export class IncidentDetailsComponent implements OnInit {
  dataService = inject(DataService)

  incident?: IncidentWithRadioMessagesDTO

  route = inject(ActivatedRoute)

  dataSocketService?: IncidentSocketService

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.dataService.getIncident(id)
      .subscribe(i => this.incident = i);

    this.dataSocketService = new IncidentSocketService(id);
  }
}
