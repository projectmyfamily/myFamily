import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadkid',
  templateUrl: './cadkid.page.html',
  styleUrls: ['./cadkid.page.scss'],
})
export class CadkidPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }


  voltar() {

    this.navCtrl.back();
  }

  seguir() {

    this.navCtrl.navigateForward('/cadopcaokid');

  }

}
