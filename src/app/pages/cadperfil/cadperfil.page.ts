import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadperfil',
  templateUrl: './cadperfil.page.html',
  styleUrls: ['./cadperfil.page.scss'],
})
export class CadperfilPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  finalizar() {
      
      this.navCtrl.navigateForward('/perfil');
  }

}
