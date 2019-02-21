import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-chitfunds',
  templateUrl: './chitfunds.component.html',
  styleUrls: ['./chitfunds.component.scss']
})
export class ChitfundsComponent implements OnInit {
  clients: Client[];
  
  constructor() {
    //Where should we get these details?
    this.clients = [
      {id : '123451', firstName : 'Linga' , lastName : 'Annela', phoneNo : '1231232', email : 'alreddy@gmail.com'},
      {id : '212345', firstName : 'Sruthi' , lastName : 'Annela', phoneNo : '1231232', email : 'alreddy@gmail.com'},
      {id : '123453', firstName : 'Linga' , lastName : 'Annela', phoneNo : '1231232', email : 'alreddy@gmail.com'},
      {id : '412345', firstName : 'Sruthi' , lastName : 'Annela', phoneNo : '1231232', email : 'alreddy@gmail.com'},
      {id : '112345', firstName : 'Linga' , lastName : 'Annela', phoneNo : '1231232', email : 'alreddy@gmail.com'},
      {id : '212345', firstName : 'Sruthi' , lastName : 'Annela', phoneNo : '1231232', email : 'alreddy@gmail.com'},
      {id : '123453', firstName : 'Linga' , lastName : 'Annela', phoneNo : '1231232', email : 'alreddy@gmail.com'},
      {id : '123454', firstName : 'Sruthi' , lastName : 'Annela', phoneNo : '1231232', email : 'alreddy@gmail.com'}
  ];
   }

  ngOnInit() {
    
  }

}
