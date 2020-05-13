import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Auth } from 'src/app/services/auth';
import { CredenciaisDTO } from 'src/model/credenciaisDTO';
import { StorageService } from 'src/app/services/storageService';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

creds: CredenciaisDTO = { 
  email: null,
  senha: null

}


loading: any;

  constructor(
    public navCtrl: NavController,
    public auth: Auth,
    public storage: StorageService,
    public loadingController:LoadingController
    
    ) { 

      if(this.storage.getLocalUser() != null) { 
        this.navCtrl.navigateForward(['/perfil'])
      }
    }

  ngOnInit() {
   
  }



  cadastrar(){

    this.navCtrl.navigateForward('/cadopcao');
  }

  logar(){
    this.auth.login(this.creds).subscribe(response =>{ 
      console.log(response)
      this.auth.successLogin(response.headers.get('Authorization'))
     this.navCtrl.navigateForward('/perfil');

    }), erro =>{ 
      console.log(erro)
    }
    
   
  }







}
