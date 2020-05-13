import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-modalpin',
  templateUrl: './modalpin.page.html',
  styleUrls: ['./modalpin.page.scss'],
})
export class ModalpinPage implements OnInit {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  voltar() {

    this.modalCtrl.dismiss();
  }

  entrar() {

    this.navCtrl.navigateForward('/tabs/home');
  }

  esqueceusenha() {

    
  }


}
