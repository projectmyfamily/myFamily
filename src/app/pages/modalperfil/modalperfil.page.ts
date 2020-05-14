import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storageService';

@Component({
  selector: 'app-modalperfil',
  templateUrl: './modalperfil.page.html',
  styleUrls: ['./modalperfil.page.scss'],
})
export class ModalperfilPage implements OnInit {

  membro = { 
    nome: "Nome",
    parentesco: "Parentesco",
    nascimento: "Nascimento"
  }

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage: StorageService
    ) { }

  ngOnInit() {
    this.membro.nome = this.storage.getLocalMember().nome
    this.membro.parentesco = this.storage.getLocalMember().parentesco
    this.membro.nascimento = this.storage.getLocalMember().nascimento
  }

  voltar() {

    this.modalCtrl.dismiss();
  }

  historico() {

    this.navCtrl.navigateForward('/historico');
  }

  creditos() {

    this.navCtrl.navigateForward('/credito');
    this.modalCtrl.dismiss();
  }

  edit() {

    this.navCtrl.navigateForward('/cadperfil');
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
          this.navCtrl.navigateBack(['/perfil'])
          this.modalCtrl.dismiss();
        }
      }
    ]
  });
    

    alert.present();

  }

  



}
