import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuComponent } from './menu/menu.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { IndexComponent } from './pages/index/index.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { AdmComponent } from './pages/adm/adm.component';

const routes: Routes = [
  {path:'', component: MenuComponent},
  {path:'inicio', component: MenuLateralComponent},
  {path:'contato', component: ContatoComponent},
  {path:'index', component: IndexComponent},
  {path:'cliente', component: ClienteComponent},
  {path:'adm', component: AdmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
