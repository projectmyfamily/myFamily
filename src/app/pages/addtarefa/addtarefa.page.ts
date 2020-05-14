import { NavController, AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/domain/cadastro-service';
import { StorageService } from 'src/app/services/storageService';
import { AccountDTO } from 'src/model/accountDTO';
import { TarefaDTO } from 'src/model/tarefaDTO';
import { TarefaService } from 'src/app/services/domain/tarefa-service';

@Component({
  selector: 'app-addtarefa',
  templateUrl: './addtarefa.page.html',
  styleUrls: ['./addtarefa.page.scss'],
})
export class AddtarefaPage implements OnInit {

  ac:any
  membros: any
  cad: TarefaDTO = { 
    nome: null, 
    status: false, 
    nivel: null,
    pontuacao: null, 
    designar: null, 
    dataFinal: null, 
    dataInicial: new Date().toLocaleString()

  }

  recebedor: any


  constructor(
    public navCtrl: NavController,
    public cadastro: CadastroService,
    public storage: StorageService,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private crud: TarefaService
    ) { }

  ngOnInit() {
    this.loadUser()
    this.alertTarefas()
   
  }


  voltar() {

  this.navCtrl.back();

  }
  loadUser(){ 
    let localUser = this.storage.getLocalUser();
      if (localUser && localUser.email) {
        this.cadastro.findByEmail(localUser.email)
          .subscribe(response => {
          this.ac = response as AccountDTO;
         console.log(response)
        this.membros = this.ac.membros
        console.log(this.membros)
          this.cad.designar = this.storage.getLocalMember().nome
           
            
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


add(){ 
let id = this.buscaMembros()
this.crud.insert(this.cad, id).subscribe(response =>{ 
console.log(response)
}, error =>{ 
  console.log(error)
}
)

}


buscaMembros(){
  var index = this.membros.map(function(element) {
    return element.nome
  }).indexOf(this.recebedor)
  console.log(index)
  return this.membros[index].id


}


async alertTarefas(){ 
  const alert = await this.alertCtrl.create({

    header: 'Informações',
    subHeader: 'Campo Nível',
    message: 'Serve para dizer qual  a dificuldade da tarefa. '
    +'São 3 niveis - 1, 2 e 3, Eles servem como multiplicador dos pontos que a tarefa irá entregar',

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
