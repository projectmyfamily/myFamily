import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addperfil',
  templateUrl: './addperfil.page.html',
  styleUrls: ['./addperfil.page.scss'],
})
export class AddperfilPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  voltar() {
  this.navCtrl.back();

  }

  adicionar(){

    
  }
}
