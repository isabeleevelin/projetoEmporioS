import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {ConfigService} from './Services/config.service';
import {CardapioService} from './Services/cardapio.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import {MatMenuModule} from '@angular/material/menu';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { IndexComponent } from './pages/index/index.component';
import { ConteudoIndexComponent } from './conteudo-index/conteudo-index.component';
import { ButtonLogoComponent } from './button-logo/button-logo.component';
import {MatInputModule} from '@angular/material/input';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { AdmComponent } from './pages/adm/adm.component';
import { MenuhorizontalComponent } from './menuhorizontal/menuhorizontal.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import { SubmenuComponent } from './submenu/submenu.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuLateralComponent,
    ContatoComponent,
    IndexComponent,
    ConteudoIndexComponent,
    ButtonLogoComponent,
    ClienteComponent,
    AdmComponent,
    MenuhorizontalComponent,
    SubmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatGridListModule,
    HttpModule,
    HttpClientModule

    
  ],
  providers: [ConfigService,CardapioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
