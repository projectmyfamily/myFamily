import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Membro } from 'src/model/membro';
import { CadastroService } from 'src/app/services/domain/cadastro-service';
import { AccountDTO } from 'src/model/accountDTO';
import { StorageService } from 'src/app/services/storageService';

@Component({
  selector: 'app-addperfil',
  templateUrl: './addperfil.page.html',
  styleUrls: ['./addperfil.page.scss'],
})
export class AddperfilPage implements OnInit {

cad: Membro = { 
  nome: null,
  nascimento: null,
  parentesco: null, 
  pin: null,
  tipo: 1
}
confirme: any = null
ac: any
teste: AccountDTO
responsabilidade: boolean = false

  constructor(
    public navCtrl: NavController,
    public cadastrar: CadastroService,
    public storage: StorageService
    
    ) { }

  ngOnInit() {
    this.loadUser()
    console.log(this.teste)
    
  }

  voltar() {
  //this.navCtrl.back();
  this.navCtrl.pop()
  
  }

  adicionar(){
   let localUser = this.storage.getLocalUser()
    this.cadastrar.findByEmail(localUser.email)
    .subscribe(response => { 
      this.ac = response as AccountDTO
    })
    if(this.cad.pin == this.confirme){ 
      if(this.responsabilidade == true){ 
        this.cad.tipo = 0
      }
      this.cadastrar.cadastrarMembro(this.cad, this.ac.id)
      .subscribe(response =>{ 
        console.log(response)
        this.voltar()
      }, error => { 
        console.log("Erro ao ao cadastrar")
      }
      );
    }
   
    
  }

  loadUser(){ 
    let localUser = this.storage.getLocalUser();
      if (localUser && localUser.email) {
        this.cadastrar.findByEmail(localUser.email)
          .subscribe(response => {
            //console.log(response)
            this.ac = response as AccountDTO;
            this.teste = this.ac
          
           
            
          },
          error => {
            if (error.status == 403) {
            }
          });
      }
      else {
      
      }    
  
  }
}
