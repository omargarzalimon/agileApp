
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  puntos = 1800;
  userId;
  usuario: Observable<any>;
  
  constructor(private dataService: DataService, private storage: Storage) {
    this.storage.get('id').then((val) => {
      this.userId = val;
      this.usuario = this.dataService.getProfileById(this.userId);
    });
   }

  public profile = [
    {
    campo: 'ID',
     data: '32171040'
    },
    {
      campo: 'Name',
       data: 'Wendy Herrera Aldana'
    },
    {
      campo: 'E-mail',
       data: 'wendy.herrera@gmodelo.com.mx'
    },
    {
      campo: 'Zone',
       data: 'MAZ'
    },
    {
      campo: 'Process',
       data: 'Solutions'
    },
    {
      campo: 'puntos',
       data: '1300'
    },
    {
      campo: 'progress',
       data: '.2'
    }
  ];

 

  ngOnInit() {

  }

}
