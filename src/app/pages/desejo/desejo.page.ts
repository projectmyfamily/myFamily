import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { ModaldesejoPage } from '../modaldesejo/modaldesejo.page';
import { ModalperfilPage } from '../modalperfil/modalperfil.page';
import { StorageService } from 'src/app/services/storageService';
import { CadastroService } from 'src/app/services/domain/cadastro-service';
import { AccountDTO } from 'src/model/accountDTO';
import { DesejosService } from 'src/app/services/domain/desejos-service';
import { TarefaService } from 'src/app/services/domain/tarefa-service';
import { Points } from 'src/model/points';

@Component({
  selector: 'app-desejo',
  templateUrl: './desejo.page.html',
  styleUrls: ['./desejo.page.scss'],
})
export class DesejoPage implements OnInit {


ac:any
membros:any
desejos: any = []
pontuacao

  constructor(
    public modalCtrl: ModalController, 
    public navCtrl: NavController,
    public storage: StorageService,
    public cadastro: CadastroService,
    public alertCtrl: AlertController, 
    public desejosService: DesejosService, 
    public tarefas: TarefaService
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
          this.membros = this.ac.membros
        this.desejos = this.membros[this.buscaMembros()].desejos
            this.pontuacao = this.membros[this.buscaMembros()].pontuacao
           
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


  async alertCompra(id, pts){ 
   
    
    const alert = await this.alertCtrl.create({
  
      header: 'Compra de Desejo',
      subHeader: 'Deseja comprar?',
      message: 'Se você escolher comprar o desejo gastará os seus pontos',  
      buttons: [{
        text: 'Fechar',
        role: 'fechar',
        handler: () => {
          
        }
      },{
        text: 'Ok',
        handler: () => {
          this.compra(id, pts)
          this.modalCtrl.dismiss();
        }
      }
    ]
  });
  alert.present()
  }


  compra(ids, pts){ 
    if(this.storage.getLocalMember().pontuacao >= pts){ 

    
    let points = pts
    let pointsUser = this.storage.getLocalMember().pontuacao
    let final: Points = { 
      pontuacao: pointsUser - pts
    }
    this.tarefas.updatePoints(final, this.storage.getLocalMember().id).subscribe(resp =>{ 
      console.log(this.storage.getLocalMember().id)
      console.log(final)
    })
   
    this.desejosService.delete(ids).subscribe(response=>{ 
      


    }, error => { 

    }
    )
  }else{ 

  }
    
  }




}
