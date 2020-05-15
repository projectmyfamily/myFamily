import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storageService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modalperfil',
  templateUrl: './modalperfil.page.html',
  styleUrls: ['./modalperfil.page.scss'],
})
export class ModalperfilPage implements OnInit {

  membro = { 
    nome: "Nome",
    nascimento: "Data de Nascimento",
    pontuacao: "Pontuação"
  }

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage: StorageService,
    public router: Router
    ) { }

  ngOnInit() {
    this.membro.nome = this.storage.getLocalMember().nome
    this.membro.nascimento = this.storage.getLocalMember().nascimento
    this.membro.pontuacao = this.storage.getLocalMember().pontuacao
  }

  voltar() {

    this.modalCtrl.dismiss();
  }

  historico() {

    this.navCtrl.navigateForward('/historico');
    this.modalCtrl.dismiss();
  }

  creditos() {

    this.navCtrl.navigateForward('/credito');
    this.modalCtrl.dismiss();
  }

  edit() {

    this.navCtrl.navigateForward('/editarperfil');
    this.modalCtrl.dismiss();
  }

  async logout() {
    const alert = await this.alertCtrl.create({

      header: 'Deseja sair do perfil?',
      subHeader: 'MyFamily',
      message: 'Se sair do perfil, só podera retornar após digitar seu PIN novamente.',

      buttons: [{
        text: 'Cancelar',
        role: 'cancelar',
        handler: () => {

        }
      },
      {
        text: 'Ok',
        handler: () => {
          this.router.navigate(['/perfil'])
          this.modalCtrl.dismiss();
        }
      }
    ]
  });
    

    alert.present();

  }

  



}
