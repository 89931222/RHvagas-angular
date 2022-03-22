import { Component, OnInit } from '@angular/core';
import{ Vaga}from '../models/vagas.model';
import { VagasService } from '../vagas.service';
@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {
public vaga:Vaga = new Vaga(0,"","","",0);
  private _VagaService: any;
constructor(private_vagasService: VagasService) { }

  ngOnInit(): void {
  }


cadastrar(){
  this._VagaService.cadastrarVaga(this.vaga).subscribe(
    (  vaga: any) => {this.vaga = new Vaga (0,"","","",0)},
    (  err: any)  => {console.log("erro ao cadastrar")}

  );


 window.location.href = "/mural";
}

atualizar(id:number){
  this._VagaService.atualizarVaga(id,this.vaga).subscribe(
    (  vaga: any) => {this.vaga = new Vaga (0,"","","",0)},
    (  _err: any)  => {console.log("erro ao atualizar")}

  );
  window.location.href = "/mural";
}
excluir(id: number){
  this._VagaService.removerVaga(id,this.vaga).subscribe(
    (    vaga: any) => {this.vaga = new Vaga (0,"","","",0)},
    (    err: any)  => {console.log("erro ao Excluir")}
  );
  window.location.href = "/mural";
  }
}