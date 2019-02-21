import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';

@Component({
    selector : 'app-clients',
    templateUrl : './clients.component.html',
    styleUrls : ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{
    clients: Client[];

    constructor(){}

    ngOnInit(){
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

    onDeleteClick(id: string){
        confirm('Are you sure want to delete?');
    }
}