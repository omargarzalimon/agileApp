import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    email: '',
    password: ''
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    if (this.usuario.email === 'admin@gmodelo.com.mx' && this.usuario.password === 'admin') {
      this.router.navigate(['/dashboard3']);
    }
  }

}
