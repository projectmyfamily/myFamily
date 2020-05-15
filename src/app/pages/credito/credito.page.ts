import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.page.html',
  styleUrls: ['./credito.page.scss'],
})
export class CreditoPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
voltar(){
  this.navCtrl.back();
}
}
