import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esquecisenha',
  templateUrl: './esquecisenha.page.html',
  styleUrls: ['./esquecisenha.page.scss'],
})
export class EsquecisenhaPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  voltar(){

    this.navCtrl.back();
  }

}
