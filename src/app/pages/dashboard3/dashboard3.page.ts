import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.page.html',
  styleUrls: ['./dashboard3.page.scss'],
})
export class Dashboard3Page implements OnInit {

  usuario: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.usuario = this.dataService.getProfileById();
  }

}
