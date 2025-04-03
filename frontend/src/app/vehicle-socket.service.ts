import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { EMPTY, Observable } from 'rxjs';
import { RadioMessage } from './types';
import { radioMessages, RadioMessageSocket } from './sockets';

export class VehicleSocketService implements RadioMessageSocket {
  private socket!: WebSocketSubject<{
    type: string,
    data: any
  }>;


  constructor(vehicleId: number) {
    //N.B. WebSockets are only natively supported in browsers, which leads to weird console
    //errors in Node.js (without installing additional libraries like "ws").
    //Thus, here's my beautiful workaround:
    if(typeof WebSocket !== 'undefined') {
      this.socket = webSocket(`ws://localhost:8080/vehicles/${vehicleId}/ws`);
    } else {
      console.warn("no websockets")
    }
  }

  receiveRadioMessages(): Observable<RadioMessage> {
    if (!this.socket) return EMPTY;
    return radioMessages(this.socket?.asObservable())
  }
}
