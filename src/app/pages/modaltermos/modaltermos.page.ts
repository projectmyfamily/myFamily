import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modaltermos',
  templateUrl: './modaltermos.page.html',
  styleUrls: ['./modaltermos.page.scss'],
})
export class ModaltermosPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  voltar() {

    this.modalCtrl.dismiss();
  }

}
