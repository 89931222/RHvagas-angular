import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import {Vaga}from '../models/vagas.model';
import {} from '@angular/compiler' ;
@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vaga[] = [];
  private _vagasService: any;
 

  constructor(_private_vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }
  
  listarVagas(): void{
    this._vagasService.getVagas ()
      .subscribe(
        (retornaVaga: any[]): void => { 
            this.vagas = retornaVaga.map (
              item=>{
               return new Vaga(
                  item.id,
                  item.nome,
                  item.foto,
                  item.descrição,
                  item.salario
               );
              }
               
            )  
        }   
      )
    
  
  }
  

}


