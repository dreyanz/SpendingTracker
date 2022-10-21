import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalStorageService } from '../local-storage.service';
import { Spending } from '../models/spending';
import { SampleServiceService } from '../sample-service.service';
import { SpendingDetailsComponent } from '../spending-details/spending-details.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  amount = 0
  spendingArr : Spending[] = []

  constructor(private modalController : ModalController,
      private localStorage : LocalStorageService) {}
  
  ngOnInit(): void {
    console.log("on init")
    
    this.getEntries()
  }

  async getEntries() {
   
    console.log("getEntries")
    //let value = await Preferences.get({ key: 'spending-tracker' });
    //this.spendingArr = JSON.parse(value.value)
    //console.log("arr "+JSON.stringify(this.spendingArr))
    let value = await this.localStorage.getEntries()
    this.spendingArr = JSON.parse(value.value)
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
