import { ModalperfilPageModule } from './pages/modalperfil/modalperfil.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Auth } from './services/auth';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storageService';
import { CadastroService } from './services/domain/cadastro-service';
import { ModaltarefaPageModule } from './pages/modaltarefa/modaltarefa.module';
import { ModaldesejoPageModule } from './pages/modaldesejo/modaldesejo.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ModaltarefaPageModule,
    ModaldesejoPageModule,
    ModalperfilPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    Auth,
    StorageService,
    CadastroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
