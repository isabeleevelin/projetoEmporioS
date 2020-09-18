import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Cardapio} from '../../Services/cardapio';
import { Router } from '@angular/router';
import { CardapioService } from 'src/app/Services/cardapio.service';
import { __values } from 'tslib';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  selected = new FormControl(0);
  selecionado = [];

  cardapio:Cardapio[] = new Array();
  typesOfeat:Cardapio[];
  typesofWater:Cardapio[];

  
  index: number;
  constructor(private cardapioService: CardapioService,
    private router: Router) { }

    

  ngOnInit(): void {

    this.cardapioService.getCardapio().subscribe(res =>this.cardapio = res);
    console.log("Cardapio lista:");
    console.log(this.cardapio);

    
    this.typesOfeat=this.cardapio.filter(t=>t.tipo === 'comida' );
    console.log("Lista de comida:"+this.typesOfeat);
    this.typesofWater = this.cardapio.filter(t=>t.tipo ==='agua');

    
  }

  
  

/*
  typesOfWater: string[] = ['Mineral sem gás', 'Mineral com gás'];
  typesOfbeer: string[] = ['Bhramma', 'Budweiser', 'Itaipava', 'Devassa', 'Stella','duplo malte', 'puro malte'];
  typesOfrefri = ['Coca Cola', 'Guarana', 'Pepsi','antartida', 'goob','tes1', 'test2','test4', 'test4'];
  typesOfeat: string[] = ['mini coxinha', 'mini quibi', 'mini pastel', 'bolinho de queijo'];*/
  
 /* onChange(change: MatSelectionListChange) {
    console.log(change.option.value, change.option.selected);
    if(change.option.selected){
      this.selecionado.push(change.option.value);
    }
    
*/
    Selecionado(e,v){
      /*this.selecionado= v.selected.map(item => item.value);*/
      console.log(v.selected.map(item => item.value));
      
        this.selecionado.push(v.selected.map(item => item.value));
      
    }
    
 
  
}
