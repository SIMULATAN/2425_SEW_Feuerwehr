import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incident, IncidentWithRadioMessagesDTO, RadioCode, Vehicle } from './types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  BASE_PATH = "http://localhost:8080"

  httpClient: HttpClient = inject(HttpClient)

  getOpenIncidents() {
    return this.httpClient.get<Incident[]>(`${this.BASE_PATH}/incidents/open`)
  }

  getIncident(id: number) {
    return this.httpClient.get<IncidentWithRadioMessagesDTO>(`${this.BASE_PATH}/incidents/${id}`)
  }

  getVehicles() {
    return this.httpClient.get<Incident[]>(`${this.BASE_PATH}/vehicles`)
  }

  getVehicle(id: number) {
    return this.httpClient.get<Vehicle>(`${this.BASE_PATH}/vehicles/${id}`)
  }

  getRadioCodes() {
    return this.httpClient.get<RadioCode[]>(`${this.BASE_PATH}/radio-messages/codes`)
  }

  sendRadioMessage(vehicleId: number, radioCode: number, incidentId: number | null = null) {
    return this.httpClient.post(`${this.BASE_PATH}/radio-messages`, {
      vehicleId,
      radioCode,
      incidentId
    }).subscribe()
  }
}
