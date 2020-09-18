import { Injectable } from '@angular/core';
import { RequestOptions, Http } from '@angular/http';

import { ConfigService } from './config.service';
import {Cardapio} from './cardapio';
import { Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';



@Injectable({
  providedIn: 'root'
  
})
export class CardapioService {

  private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;

  constructor(private http: Http,
    private configService: ConfigService) {
      /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
      this.baseUrlService = `${configService.getUrlService()}/cardapio/`;

       /*ADICIONANDO O JSON NO HEADER */
       this.headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });                
       this.options = new RequestOptions({ headers: this.headers });
     }

     /**CONSULTA OS ITENS CADASTRADOS NO CARDAPIO */
    getCardapio():Observable<Cardapio[]>{        
      return this.http.get(this.baseUrlService).map(res => res.json());
  }

  /**ADICIONA UM NOVO ITEM NO CARDAPIO */
  addCardapio(cardapio: Cardapio){
 
    return this.http.post(this.baseUrlService, JSON.stringify(cardapio),this.options)
    .map(res => res.json());
}
/**EXCLUI UMA PESSOA */
excluirItemCardapio(id:number){

    return this.http.delete(this.baseUrlService + id).map(res => res.json());
}
}
