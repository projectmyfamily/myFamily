import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadopcaokid',
  templateUrl: './cadopcaokid.page.html',
  styleUrls: ['./cadopcaokid.page.scss'],
})
export class CadopcaokidPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  voltar(){

    this.navCtrl.back();
  }

  logar() {

    this.navCtrl.navigateForward('/login');
  }

  cadastrar() {

    this.navCtrl.navigateForward('/cadprincipal');
  }

}
