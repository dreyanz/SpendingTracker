import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  constructor() { }

  logSomething(){
    console.log("I'm logging something here...")
  }
}
