import { filter, Observable } from 'rxjs';
import { RadioMessage } from './types';
import { map } from 'rxjs/operators';

export interface RadioMessageSocket {
  receiveRadioMessages(): Observable<RadioMessage>;
}

export function radioMessages(observable: Observable<{type: string, data: any}>): Observable<RadioMessage> {
  return observable.pipe(filter(e => e.type == "RadioMessage"))
    .pipe(map(e => {
      return ({
        ...e.data,
        timestamp: new Date(e.data.timestamp * 1000).toISOString(),
      });
    }));
}
