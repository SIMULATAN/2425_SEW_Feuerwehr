import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Incident, RadioCode, Vehicle } from '../types';
import { ActivatedRoute } from '@angular/router';
import { RadiomessageListComponent } from '../radiomessage-list/radiomessage-list.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { VehicleSocketService } from '../vehicle-socket.service';

@Component({
  selector: 'app-incident-details',
  imports: [
    RadiomessageListComponent,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton
  ],
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.css'
})
export class VehicleDetailsComponent implements OnInit {
  dataService = inject(DataService)

  vehicle?: Vehicle

  route = inject(ActivatedRoute)

  private fb = inject(FormBuilder);
  radioMessageForm = this.fb.group({
    incidentId: [null],
    code: [0, Validators.required]
  })

  incidents?: Incident[]
  radioCodes?: RadioCode[]

  dataSocketService?: VehicleSocketService

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.dataService.getVehicle(id)
      .subscribe(i => this.vehicle = i);
    this.dataService.getOpenIncidents()
      .subscribe(i => this.incidents = i)
    this.dataService.getRadioCodes()
      .subscribe(r => this.radioCodes = r)

    this.dataSocketService = new VehicleSocketService(id);
  }

  onSubmit() {
    const value = this.radioMessageForm.value;
    this.dataService.sendRadioMessage(
      this.vehicle!.id,
      value.code!,
      value.incidentId,
    )
  }

  selectionChange(event: any) {
    // needed because this shitass fucking framework still isn't reactive
    this.radioMessageForm.value.code = Number(event.target.value)
  }

  incidentChange(event: any) {
    // needed because this shitass fucking framework still isn't reactive
    (this.radioMessageForm.value.incidentId as any as number) = Number(event.target.value)
  }
}
