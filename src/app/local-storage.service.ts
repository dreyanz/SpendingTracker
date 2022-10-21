import { Injectable } from '@angular/core';
import { GetResult, Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  async getEntries() : Promise<GetResult> {
   
    console.log("getEntries")
    Preferences.get({ key: 'spending-tracker' }).then( value => {
      console.log(`return value from then ${JSON.stringify(value)}`)
    })
    return await Preferences.get({ key: 'spending-tracker' });
    //this.spendingArr = JSON.parse(value.value)
    //console.log("arr "+JSON.stringify(this.spendingArr))
  }

  async saveData(spendingArray) {
    await Preferences.set({
      key: "spending-tracker",
      value: JSON.stringify(spendingArray)
    })
  }

}
