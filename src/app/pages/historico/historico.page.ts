import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  voltar(){


    this.navCtrl.back();
  }

}
