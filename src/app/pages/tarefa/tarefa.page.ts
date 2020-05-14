import { ModaltarefaPage } from './../modaltarefa/modaltarefa.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalperfilPage } from '../modalperfil/modalperfil.page';
import { StorageService } from 'src/app/services/storageService';
import { CadastroService } from 'src/app/services/domain/cadastro-service';
import { AccountDTO } from 'src/model/accountDTO';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.page.html',
  styleUrls: ['./tarefa.page.scss'],
})
export class TarefaPage implements OnInit {

  listaTarefas: any = [];
  membros: any = null;
  ac: any 



  constructor(
    public modalCtrl: ModalController, 
    public navCtrl: NavController,
    public storage: StorageService,
    public cadastro: CadastroService
    ) { }



  ngOnInit() {
    this.loadUser()
    
   
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

  async modalTarefa() {

    const modaltarefa = await this.modalCtrl.create({
      component: ModaltarefaPage
      
    });

    modaltarefa.present();

  }

  loadUser(){ 
    let localUser = this.storage.getLocalUser();
      if (localUser && localUser.email) {
        this.cadastro.findByEmail(localUser.email)
          .subscribe(response => {
          this.ac = response as AccountDTO;
         console.log(response)
        this.membros = this.ac.membros
      this.listaTarefas = this.membros[this.buscaMembros()].tarefas
      console.log(this.listaTarefas)
           
            
          },
          error => {
            console.log(error)
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

}
