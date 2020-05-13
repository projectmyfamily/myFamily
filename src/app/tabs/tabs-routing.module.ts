import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tarefa',
        loadChildren: () => import('../pages/tarefa/tarefa.module').then(m => m.TarefaPageModule)
      },
      {
        path: 'desejo',
        loadChildren: () => import('../pages/desejo/desejo.module').then(m => m.DesejoPageModule)
      },
      {
        path: 'atividade',
        loadChildren: () => import('../pages/atividade/atividade.module').then(m => m.AtividadePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
