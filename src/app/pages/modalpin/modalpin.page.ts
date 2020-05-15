import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storageService';

@Component({
  selector: 'app-modalpin',
  templateUrl: './modalpin.page.html',
  styleUrls: ['./modalpin.page.scss'],
})
export class ModalpinPage implements OnInit {


pin: any
msg: any


  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public storage: StorageService) { }

  ngOnInit() {
  
  }


  voltar() {

    this.modalCtrl.dismiss();
  }

  entrar() {
    if(this.pin == this.storage.getLocalMember().pin){ 
      this.navCtrl.navigateForward('/tabs/home');
      this.modalCtrl.dismiss()
    }else{ 
      this.msg = "Pin incorreto"
    }
    
    
  }

  esqueceusenha() {

    
  }


}
