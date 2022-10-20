import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Spending } from '../models/spending';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-spending-details',
  templateUrl: './spending-details.component.html',
  styleUrls: ['./spending-details.component.scss'],
})
export class SpendingDetailsComponent implements OnInit {
  
  amount;
  name: string;
  category = ""
  notes:string = "test"

  spendingArray : Spending[] = []

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    console.log("on init")
    console.log("amount is "+this.amount)
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async confirm() {
    
    let value = await Preferences.get({ key: 'spending-tracker' });

    if (value.value != null) {
    this.spendingArray = JSON.parse(value.value)
    }
    
    console.log("notes "+this.notes)
    let spending = new Spending(this.amount, this.category, this.notes)
    
    //let spendingArray : [Spending] = [spending]
    if (this.spendingArray.length > 0) {
      this.spendingArray.push(spending)
    } else {
      this.spendingArray = []
      this.spendingArray.push(spending)
    }
    

    await Preferences.set({
      key: "spending-tracker",
      value: JSON.stringify(this.spendingArray)
    })

    console.log(`spending info ${JSON.stringify(this.spendingArray)}`)

    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  categorySelected(type) {
    console.log(`type is ${type}`)
    this.category = type
  }

}
