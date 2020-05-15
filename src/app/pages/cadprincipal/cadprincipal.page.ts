import { ModaltermosPage } from './../modaltermos/modaltermos.page';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Cadastro } from 'src/model/cadastro';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-cadprincipal',
  templateUrl: './cadprincipal.page.html',
  styleUrls: ['./cadprincipal.page.scss'],
})
export class CadprincipalPage implements OnInit {


  cad: Cadastro = { 
nome: null, 
email: null, 
senha: null,  


  }

  
confirme = null; //variável para confirmação de senha
msg = null; //msg de rro caso confirme esteja diferente da senha digitada

  constructor(public navCtrl: NavController, private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  voltar(){

    this.navCtrl.back();
  }

  seguir() {
    //estrutura condicional para saber se a senha está igual a confirmação dela, caso não esteja não seguirá em frente
    if(this.cad.senha == this.confirme){
      let extras: NavigationExtras = { 
        state: { 
          data: this.cad
        }
      }
      this.navCtrl.navigateForward('/cadperfil', extras);
    }else{ 
      this.msg = "As senhas não conferem, por favor digitar corretamente"
      
    }
  }

  async modalTermos() {

    const modaltermos = await this.modalCrtl.create({
      component: ModaltermosPage
    });

    modaltermos.present();


  }

   


}
