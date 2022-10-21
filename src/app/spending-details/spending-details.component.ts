import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalStorageService } from '../local-storage.service';
import { Spending } from '../models/spending';

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

  constructor(private modalCtrl: ModalController, 
    private localStorage : LocalStorageService) {}

  ngOnInit(): void {
    console.log("on init")
    console.log("amount is "+this.amount)
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async confirm() {
    
    let value = await this.localStorage.getEntries()

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
    
    this.localStorage.saveData(this.spendingArray)

    console.log(`spending info ${JSON.stringify(this.spendingArray)}`)

    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  categorySelected(type) {
    console.log(`type is ${type}`)
    this.category = type
  }

}
