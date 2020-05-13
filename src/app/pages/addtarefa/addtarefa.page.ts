import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/domain/cadastro-service';
import { StorageService } from 'src/app/services/storageService';
import { AccountDTO } from 'src/model/accountDTO';

@Component({
  selector: 'app-addtarefa',
  templateUrl: './addtarefa.page.html',
  styleUrls: ['./addtarefa.page.scss'],
})
export class AddtarefaPage implements OnInit {

  ac:any
  membros: any

  constructor(
    public navCtrl: NavController,
    public cadastro: CadastroService,
    public storage: StorageService
    ) { }

  ngOnInit() {
    this.loadUser()
   
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
}
