import { Component, OnInit, Input } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { FormControl } from '@angular/forms';
import { MatSelectionListChange } from '@angular/material/list/selection-list';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  selected = new FormControl(0);
  selecionado = [];

  listaChecked: Array<String> = new Array();

  index: number;
  constructor() { }

  ngOnInit(): void {
  }

  typesOfWater: string[] = ['Mineral sem gás', 'Mineral com gás'];
  typesOfbeer: string[] = ['Bhramma', 'Budweiser', 'Itaipava', 'Devassa', 'Stella'];
  typesOfrefri: string[] = ['Coca Cola', 'Guarana', 'Pepsi'];
  typesOfeat: string[] = ['mini coxinha', 'mini quibi', 'mini pastel', 'bolinho de queijo'];
  
 /* onChange(change: MatSelectionListChange) {
    console.log(change.option.value, change.option.selected);
    if(change.option.selected){
      this.selecionado.push(change.option.value);
    }
    */

    onChange(e,v){
      /*this.selecionado= v.selected.map(item => item.value);*/
      
      if(v.selected){
        this.selecionado.join(v.selected.map(item => item.value));
      }else{
        this.selecionado.splice(this.selecionado.indexOf(v.selected.map(item => item.value)),1);
      }

    }

 
  
}
