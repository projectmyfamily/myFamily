import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModaldesejoPage } from '../modaldesejo/modaldesejo.page';
import { ModalperfilPage } from '../modalperfil/modalperfil.page';

@Component({
  selector: 'app-desejo',
  templateUrl: './desejo.page.html',
  styleUrls: ['./desejo.page.scss'],
})
export class DesejoPage implements OnInit {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  async modalDesejo() {

    const modaldesejo = await this.modalCtrl.create({
      component: ModaldesejoPage

    });

    modaldesejo.present();

  }

  async abrirmodalperfil() {

    const modalperfil = await this.modalCtrl.create({
      component: ModalperfilPage
    });

    modalperfil.present();


  }

  add() {

    this.navCtrl.navigateForward('/adddesejo');
  }

}
