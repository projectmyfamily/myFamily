import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalperfilPage } from '../modalperfil/modalperfil.page';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.page.html',
  styleUrls: ['./tarefa.page.scss'],
})
export class TarefaPage implements OnInit {

  ListaTarefas: any = [];
  tarefa: any = null;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  async abrirmodalperfil() {

    const modalperfil = await this.modalCtrl.create({
      component: ModalperfilPage
    });

    modalperfil.present();


  }

  add() {

    this.navCtrl.navigateForward('/addtarefa');
  }



  

}
