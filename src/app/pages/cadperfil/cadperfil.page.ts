import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Membro } from 'src/model/membro';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CadastroService } from 'src/app/services/domain/cadastro-service';
import { AccountDTO } from 'src/model/accountDTO';
import { StorageService } from 'src/app/services/storageService';
import { Auth } from 'src/app/services/auth';
import { CredenciaisDTO } from 'src/model/credenciaisDTO';
import { Cadastro } from 'src/model/cadastro';

@Component({
  selector: 'app-cadperfil',
  templateUrl: './cadperfil.page.html',
  styleUrls: ['./cadperfil.page.scss'],
})
export class CadperfilPage implements OnInit {



  

  membro: Membro = { 
    nome: null, 
    nascimento: null, 
    parentesco: null, 
    pin: null,
    responsabilidade: false
  }

  confirme = null
  msg = null

  //informações da conta em stand by para envio
  main: any


  ac: any
  user: any

  constructor(
    public navCtrl: NavController,
    public active: ActivatedRoute, 
    public router: Router,
    public cadastro: CadastroService,
    public storage: StorageService,
    public auth: Auth
    
    ) { 
      this.active.queryParams.subscribe( params => { 
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.main = getNav.extras.state
      
        
      }
      });
    }

  ngOnInit() {
    
   
  }

  finalizar() {
      if(this.membro.pin == this.confirme) {
        this.postAccount()
       
        
       

      }else{ 
        this.msg = "Os pins não são iguais, por favor digitar ambos corretamente"
      }
      
   
    
  }

    postMembro(id){ 
      this.cadastro.cadastrarMembro(this.membro, id).subscribe(
        response=>{ 
          console.log("Membro cadastrado com sucesso!")
          this.navCtrl.navigateForward('/perfil');

      }), erro =>{ 
        
      }
      
    }

    postAccount(){ 
      this.cadastro.cadastrar(this.main.data).subscribe(
        response =>{ 
          console.log("Cadastro conta ok")
          let cad: CredenciaisDTO= { 
            email: this.main.data.email,
            senha: this.main.data.senha

          }
          this.auth.login(cad).subscribe(resp =>{ 
            console.log("Login Success")
            this.loadUser()
            
          })
         

        }, erro =>{ 
          console.log("Erro no cadastro conta ")

        }
      )
    }



    //metodo de busca na API 
    loadUser(){ 
      let localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
          this.cadastro.findByEmail(this.main.data.email)
            .subscribe(response => {
              console.log(response)
              this.ac = response as AccountDTO;
              this.postMembro(this.ac.id);
             
              
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
