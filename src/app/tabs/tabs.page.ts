import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CadastroService } from '../services/domain/cadastro-service';
import { StorageService } from '../services/storageService';
import { AccountDTO } from 'src/model/accountDTO';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
ac: any
membro: any
  constructor(
    private navCtrl: NavController,
    private router: Router,
    public cadastro: CadastroService,
    public storage: StorageService
  ) {}

 ngOnInit(){ 
   this.loadUser()
   
 }


  sair(){ 
    
   this.router.navigate(['/perfil'])
 
    

  }

  loadUser(){ 
    let localUser = this.storage.getLocalUser();
      if (localUser && localUser.email) {
        this.cadastro.findByEmail(localUser.email)
          .subscribe(response => {
          this.ac = response as AccountDTO;
          this.membro = this.ac.membros
        this.storage.setLocalMember(
          this.membro[this.findMember()]
        )
         
            
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


  findMember(){ 
    let localName = this.storage.getLocalMember().nome
    let index = this.membro.map(element =>{ 
      return element.nome
    }).indexOf(localName)
    
    return index
    
    
  }

}

