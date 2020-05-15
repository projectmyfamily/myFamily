import {  NavController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storageService';
import { TarefasUpdate } from 'src/model/tarefasUpdate';
import { TarefaService } from 'src/app/services/domain/tarefa-service';
import { TarefaDTO } from 'src/model/tarefaDTO';
import { Points } from 'src/model/points';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modaltarefa',
  templateUrl: './modaltarefa.page.html',
  styleUrls: ['./modaltarefa.page.scss'],
})
export class ModaltarefaPage implements OnInit {

tarefas = this.storage.getModal()

data = new Date().toLocaleString()

  constructor(public modalCtrl: ModalController, public storage: StorageService, public tarefasService: TarefaService
    , public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
   
  }

  voltar() {

    this.modalCtrl.dismiss();
  }


  cadUpdate: TarefasUpdate = { 
    status: true,
    dataFinal: this.data
  }

  concluir(id: string, t: TarefaDTO){ 
    let points = this.storage.getModal().pontuacao * this.storage.getModal().nivel
    let p: Points = { 
      pontuacao: points
    }
   this.tarefasService.updateTarefas(this.cadUpdate, id).subscribe(response => { 
      this.tarefasService.updatePoints(p, this.storage.getLocalMember().id).subscribe(resp =>{ 
        this.router.navigate['/perfil']
        this.modalCtrl.dismiss()
        console.log(resp);
        location.reload()
      })
    })
  
  }

}
