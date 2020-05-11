import { ModaltermosPage } from './../modaltermos/modaltermos.page';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadprincipal',
  templateUrl: './cadprincipal.page.html',
  styleUrls: ['./cadprincipal.page.scss'],
})
export class CadprincipalPage implements OnInit {

  constructor(public navCtrl: NavController, private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  voltar(){

    this.navCtrl.back();
  }

  seguir() {

      this.navCtrl.navigateForward('/cadperfil');
  }

  async modalTermos() {

    const modaltermos = await this.modalCrtl.create({
      component: ModaltermosPage
    });

    modaltermos.present();


  }

}
