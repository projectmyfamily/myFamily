import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tarefa',
    loadChildren: () => import('./pages/tarefa/tarefa.module').then( m => m.TarefaPageModule)
  },
  {
    path: 'desejo',
    loadChildren: () => import('./pages/desejo/desejo.module').then( m => m.DesejoPageModule)
  },
  {
    path: 'atividade',
    loadChildren: () => import('./pages/atividade/atividade.module').then( m => m.AtividadePageModule)
  },
  {
    path: 'addtarefa',
    loadChildren: () => import('./pages/addtarefa/addtarefa.module').then( m => m.AddtarefaPageModule)
  },
  {
    path: 'adddesejo',
    loadChildren: () => import('./pages/adddesejo/adddesejo.module').then( m => m.AdddesejoPageModule)
  },
  {
    path: 'modaldesejo',
    loadChildren: () => import('./pages/modaldesejo/modaldesejo.module').then( m => m.ModaldesejoPageModule)
  },
  {
    path: 'modalperfil',
    loadChildren: () => import('./pages/modalperfil/modalperfil.module').then( m => m.ModalperfilPageModule)
  },
  {
    path: 'credito',
    loadChildren: () => import('./pages/credito/credito.module').then( m => m.CreditoPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./pages/historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'modalpin',
    loadChildren: () => import('./pages/modalpin/modalpin.module').then( m => m.ModalpinPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cadperfil',
    loadChildren: () => import('./pages/cadperfil/cadperfil.module').then( m => m.CadperfilPageModule)
  },
  {
    path: 'cadprincipal',
    loadChildren: () => import('./pages/cadprincipal/cadprincipal.module').then( m => m.CadprincipalPageModule)
  },
  {
    path: 'cadopcaokid',
    loadChildren: () => import('./pages/cadopcaokid/cadopcaokid.module').then( m => m.CadopcaokidPageModule)
  },
  {
    path: 'cadkid',
    loadChildren: () => import('./pages/cadkid/cadkid.module').then( m => m.CadkidPageModule)
  },
  {
    path: 'cadopcao',
    loadChildren: () => import('./pages/cadopcao/cadopcao.module').then( m => m.CadopcaoPageModule)
  },
  {
    path: 'opcao',
    loadChildren: () => import('./pages/opcao/opcao.module').then( m => m.OpcaoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'modaltermos',
    loadChildren: () => import('./pages/modaltermos/modaltermos.module').then( m => m.ModaltermosPageModule)
  },
  {
    path: 'addperfil',
    loadChildren: () => import('./pages/addperfil/addperfil.module').then( m => m.AddperfilPageModule)
  },
  {
    path: 'modaltarefa',
    loadChildren: () => import('./pages/modaltarefa/modaltarefa.module').then( m => m.ModaltarefaPageModule)
  },  {
    path: 'esquecisenha',
    loadChildren: () => import('./pages/esquecisenha/esquecisenha.module').then( m => m.EsquecisenhaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
