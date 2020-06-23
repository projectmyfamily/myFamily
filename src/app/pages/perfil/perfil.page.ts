import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ModalController } from '@ionic/angular';
import { CadastroService } from 'src/app/services/domain/cadastro-service';
import { StorageService } from 'src/app/services/storageService';
import { AccountDTO } from 'src/model/accountDTO';
import { ModalpinPage } from '../modalpin/modalpin.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  ac: any
  membro: any

  constructor(
    public navCtrl: NavController,
    public cadastro: CadastroService,
    public storage: StorageService,
    public modalCtrl: ModalController,
    public router: Router

    ) { }

  ngOnInit() {

    this.loadUser()
    
  }


  sair(){
    this.storage.setLocalUser(null)
    this.navCtrl.navigateBack('/login')
    
    
  }


  loadUser(){ 
    let localUser = this.storage.getLocalUser();
      if (localUser && localUser.email) {
        this.cadastro.findByEmail(localUser.email)
          .subscribe(response => {
          this.ac = response as AccountDTO;
          console.log(this.ac)
          this.membro = this.ac.membros
         
           
            
          },
          error => {
            if (error.status == 403) {
              this.sair()

            }
          });
      }
      else {
      
      }    
  
  }

  addperfil() {

    this.navCtrl.navigateBack('/addperfil');
  }


  home(m){ 
    
    console.log(m)
    this.storage.setLocalMember(m)
    //this.storage.setMemberInfo()
    this.abrirmodalperfil()
  }



  async abrirmodalperfil() {

    const modalperfil = await this.modalCtrl.create({
      component: ModalpinPage
    });

    modalperfil.present();


  }

}



