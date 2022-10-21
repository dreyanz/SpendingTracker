import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CreateUser } from '../models/users';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  count = 0

  constructor(private apiService : ApiService) {}

  callGetApi(){
    this.apiService.getUsers().subscribe(response => {
      this.count = response.data.length
    })
  }

  callPostApi(){
    let user = new CreateUser()
    user.job = "Test Job"
    user.name = "Test Name"
    this.apiService.createUser(user)
  }

  callPutApi(){
    let user = new CreateUser()
    user.job = "Test Update Job"
    user.name = "Test Update Name"
    this.apiService.updateUser(user)
  }

  callDeleteApi() {
    this.apiService.deleteUser()
  }

}
