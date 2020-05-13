import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CadastroService } from 'src/app/services/domain/cadastro-service';
import { StorageService } from 'src/app/services/storageService';
import { AccountDTO } from 'src/model/accountDTO';
import { TouchSequence } from 'selenium-webdriver';

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
    public storage: StorageService
    ) { }

  ngOnInit() {
    this.loadUser()
  }


  sair(){
    this.storage.setLocalUser(null)
    this.navCtrl.navigateForward('/login')
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
            }
          });
      }
      else {
      
      }    
  
  }

  addperfil() {

    this.navCtrl.navigateBack('/addperfil');
  }
}
