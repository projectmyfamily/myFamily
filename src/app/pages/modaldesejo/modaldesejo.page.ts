import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modaldesejo',
  templateUrl: './modaldesejo.page.html',
  styleUrls: ['./modaldesejo.page.scss'],
})
export class ModaldesejoPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  voltar() {

    this.modalCtrl.dismiss();
  }
  

}
