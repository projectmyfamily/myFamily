import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadopcao',
  templateUrl: './cadopcao.page.html',
  styleUrls: ['./cadopcao.page.scss'],
})
export class CadopcaoPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  sair(){

    this.navCtrl.back();
  }

  cadKid(){

    this.navCtrl.navigateForward('/cadkid');
  }

  cadAdulto(){

    this.navCtrl.navigateForward('/cadprincipal');
  }

}
