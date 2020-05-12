import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Auth } from 'src/app/services/auth';
import { CredenciaisDTO } from 'src/model/credenciaisDTO';

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



  constructor(
    public navCtrl: NavController,
    public auth: Auth
    
    ) { 


    }

  ngOnInit() {
  }


  cadastrar(){

    this.navCtrl.navigateForward('/cadopcao');
  }

  logar(){
    this.auth.login(this.creds).subscribe(response =>{ 
      this.auth.successLogin(response.headers.get('Authorization'))
     this.navCtrl.navigateForward('/perfil');

    }), erro =>{ 
      console.log(erro)
    }
    
   
  }





}
