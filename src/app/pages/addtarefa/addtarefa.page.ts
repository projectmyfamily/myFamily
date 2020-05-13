import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtarefa',
  templateUrl: './addtarefa.page.html',
  styleUrls: ['./addtarefa.page.scss'],
})
export class AddtarefaPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  voltar() {

  this.navCtrl.back();

  }
}
