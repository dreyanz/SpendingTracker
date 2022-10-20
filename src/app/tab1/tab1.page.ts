import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { ModalController } from '@ionic/angular';
import { Spending } from '../models/spending';
import { SpendingDetailsComponent } from '../spending-details/spending-details.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  amount = 0
  spendingArr : Spending[] = []

  constructor(private modalController : ModalController) {}
  
  ngOnInit(): void {
    console.log("on init")
    
    this.getEntries()
  }

  async getEntries() {
   
    console.log("getEntries")
    let value = await Preferences.get({ key: 'spending-tracker' });
    this.spendingArr = JSON.parse(value.value)
    console.log("arr "+JSON.stringify(this.spendingArr))
  }

  async openDetails(){
    this.getEntries()
    console.log("amount value "+this.amount)
    const modal = await this.modalController.create({
      component: SpendingDetailsComponent,
      componentProps: {
        amount: this.amount
      }
    });
    modal.present()

    modal.onDidDismiss().then(() => {
      console.log("modal is dismiss")
      this.getEntries()
    })


  }

}
