import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Membro } from 'src/model/membro';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from 'src/app/services/domain/cadastro-service';
import { AccountDTO } from 'src/model/accountDTO';
import { StorageService } from 'src/app/services/storageService';

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
  data: any


  ac: any
  user: any

  constructor(
    public navCtrl: NavController,
    public active: ActivatedRoute, 
    public router: Router,
    public cadastro: Cadastro,
    public storage: StorageService
    
    ) { 
      this.active.queryParams.subscribe( params => { 
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.data = getNav.extras.state
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
      
    //this.navCtrl.navigateForward('/perfil');
    
  }

    postMembro(id){ 
      this.cadastro.cadastrarMembro(this.membro, id).subscribe(
        response=>{ 


      }), erro =>{ 
        
      }
      
    }

    postAccount(){ 
      this.cadastro.cadastrar(this.data).subscribe(
        response =>{ 
          

        }, erro =>{ 

        }
      )
    }



    //metodo de busca na API 
    loadUser(){ 
      let localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
          this.cadastro.findByEmail(this.data.email)
            .subscribe(response => {
              this.ac = response as AccountDTO;
              this.membro = this.ac.membros
              this.user = this.ac.id
              
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
