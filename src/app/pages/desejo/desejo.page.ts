import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { ModaldesejoPage } from '../modaldesejo/modaldesejo.page';
import { ModalperfilPage } from '../modalperfil/modalperfil.page';
import { StorageService } from 'src/app/services/storageService';
import { CadastroService } from 'src/app/services/domain/cadastro-service';
import { AccountDTO } from 'src/model/accountDTO';

@Component({
  selector: 'app-desejo',
  templateUrl: './desejo.page.html',
  styleUrls: ['./desejo.page.scss'],
})
export class DesejoPage implements OnInit {


ac:any
membros:any
desejos: any

  constructor(
    public modalCtrl: ModalController, 
    public navCtrl: NavController,
    public storage: StorageService,
    public cadastro: CadastroService,
    public alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.loadUser()
    this.alertDesejo()

    
  }

  async modalDesejo() {

    const modaldesejo = await this.modalCtrl.create({
      component: ModaldesejoPage
      
    });

    modaldesejo.present();

  }

  async abrirmodalperfil() {

    const modalperfil = await this.modalCtrl.create({
      component: ModalperfilPage
    });

    modalperfil.present();


  }

  add() {

    this.navCtrl.navigateForward('/adddesejo');
  }

  loadUser(){ 
    let localUser = this.storage.getLocalUser();
      if (localUser && localUser.email) {
        this.cadastro.findByEmail(localUser.email)
          .subscribe(response => {
          this.ac = response as AccountDTO;
          console.log(this.ac)
          this.membros = this.ac.membros
        this.desejos = this.membros[this.buscaMembros()].desejos
        console.log(this.desejos)
    
            
          },
          error => {
            if (error.status == 403) {
            

            }
          });
      }
      else {
      
      }    
  
  }



  buscaMembros(){
    var index = this.membros.map(function(element) {
      return element.nome
    }).indexOf(this.storage.getLocalMember().nome)
    return index
    
  
  }



  async alertDesejo(){ 
    const alert = await this.alertCtrl.create({
  
      header: 'Informações',
      subHeader: 'Pontos do desejo',
      message: 'Todo desejo para ser conquistado é necessário ter pontos para obtê-los. '
      +'A quatidade de pontos de todo desejo é igual a 3x o seu valor de custo.' + ' Em breve esse parametro poderá ser mudado pelo responsável da família!',
  
      buttons: [{
        text: 'Fechar',
        role: 'fechar',
        handler: () => {
          
        }
      },
    ]
  });
  alert.present()
  }




}
