import { NavController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modaltarefa',
  templateUrl: './modaltarefa.page.html',
  styleUrls: ['./modaltarefa.page.scss'],
})
export class ModaltarefaPage implements OnInit {


  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  voltar() {

    this.modalCtrl.dismiss();
  }

}
