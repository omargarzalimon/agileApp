import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.page.html',
  styleUrls: ['./dashboard3.page.scss'],
})
export class Dashboard3Page implements OnInit {
  userId;
  usuario: Observable<any>;

  constructor(private dataService: DataService, private storage: Storage) { 
    this.storage.get('id').then((val) => {
      this.userId = val;
      this.usuario = this.dataService.getProfileById(this.userId);
    });
  }

  ngOnInit() {
     
  }

}
