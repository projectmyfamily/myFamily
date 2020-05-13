import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-adddesejo',
  templateUrl: './adddesejo.page.html',
  styleUrls: ['./adddesejo.page.scss'],
})
export class AdddesejoPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  voltar() {

    this.navCtrl.back();
  
    }

}
