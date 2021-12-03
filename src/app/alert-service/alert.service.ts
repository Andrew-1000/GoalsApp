import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertMessage(message:string) {
    alert(message)
  }
  constructor() { }
}
