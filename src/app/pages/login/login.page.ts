import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userEmail;
  userPass;
  userId;
  usuario = {
    email: '',
    password: ''
  };
 
  constructor(private router: Router, private dataService: DataService, private storage: Storage ) { }
  

  ngOnInit() {
  }

  onSubmitTemplate(){
    this.dataService.getProfileByEmail(this.usuario.email)
    .subscribe(
      res => {
        this.userEmail = res[0].email;
        this.userPass = res[0].password;
        this.userId = res[0].id;
        this.validar();
      }
    );
  }

 validar(){
    if (this.usuario.email === this.userEmail && this.usuario.password === this.userPass) {
      this.storage.set('id', this.userId);
      this.router.navigate(['/dashboard3']);
    }else{
      document.getElementById("menssageError").style.display = "block";
      setTimeout(function(){
        document.getElementById("menssageError").style.display = "none";
      },3000);
    }
  }
}


