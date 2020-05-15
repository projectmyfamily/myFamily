import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DesejosDTO } from 'src/model/desejosDTO';
import { DesejosService } from 'src/app/services/domain/desejos-service';
import { AccountDTO } from 'src/model/accountDTO';
import { CadastroService } from 'src/app/services/domain/cadastro-service';
import { StorageService } from 'src/app/services/storageService';

@Component({
  selector: 'app-adddesejo',
  templateUrl: './adddesejo.page.html',
  styleUrls: ['./adddesejo.page.scss'],
})
export class AdddesejoPage implements OnInit {

cad: DesejosDTO = { 
  nome: null, 
  pontuacao: null, 
  comprado: false, 
  dataPublicacao: new Date().toLocaleString(),
  valor: null
}






  constructor(
    public navCtrl: NavController,
    public add: DesejosService,
    public cadastro: CadastroService,
    public storage: StorageService
    ) { }

  ngOnInit() {
   
  }

  voltar() {

    this.navCtrl.back();
  
    }


    insert(){ 
      this.pontuacao()
      this.add.insert(this.cad, this.storage.getLocalMember().id).subscribe(response=>{ 
        console.log("cadastrado com sucesso")
        console.log(response)

      }, error => { 
        console.log(error)

      }
      )
     

    }



pontuacao(){ 
  this.cad.pontuacao = this.cad.valor * 3

}



}
