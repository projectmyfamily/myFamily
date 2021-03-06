import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modalperfil',
  templateUrl: './modalperfil.page.html',
  styleUrls: ['./modalperfil.page.scss'],
})
export class ModalperfilPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  voltar() {

    this.modalCtrl.dismiss();
  }

  historico() {

    this.navCtrl.navigateForward('/historico');
  }

  creditos() {

    this.navCtrl.navigateForward('/credito');
  }

  edit() {

    this.navCtrl.navigateForward('/cadperfil');
  }

  async logout() {
    const alert = await this.alertCtrl.create({

      header: 'Deseja sair do perfil?',
      subHeader: 'MyFamily',
      message: 'Se sair do perfil, só podera retornar após digitar seu PIN novamente.',

      buttons: ['OK', 'Cancelar']
    });

    alert.present();

  }



}
