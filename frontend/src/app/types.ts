export interface Vehicle {
  id: number
  type: string
  callSign: string
  // TODO: station type
  station: any
  radioMessages: RadioMessage[]
}

export interface Incident {
  id: number
  description: string
  level: number
}

export interface IncidentWithRadioMessagesDTO extends Incident {
  radioMessages: RadioMessage[]
}

export interface RadioMessage {
  vehicle: Vehicle
  code: RadioCode
  timestamp: Date
}

export interface RadioCode {
  number: number
  name: string
}
