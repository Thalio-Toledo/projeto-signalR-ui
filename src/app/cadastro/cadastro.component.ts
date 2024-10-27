import { Component, OnInit } from '@angular/core';
import { SignalrService } from '../signalr.service';
import { CommonModule } from '@angular/common';
import { Promocao } from '../models/promocao';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.less'
})
export class CadastroComponent implements OnInit {
  Empresa: string;
  Chamada: string;
  Regras: string;
  URL: string;
  constructor(private signalrService: SignalrService){

  }

  ngOnInit(): void {
    // Inicia a conexão com SignalR
    this.signalrService.startConnection();

    // // Escuta mensagens do servidor
    // this.signalrService.addMessageListener();

    // // Assina o Observable de mensagens para atualizar o array local
    // this.signalrService.getMessageObservable().subscribe(message => {
    //   this.messages.push(message);
    // });
  }

    // Método para enviar uma mensagem
    cadastrar(): void {

      var promocao : Promocao = new Promocao()
      promocao.Empresa =  this.Empresa;
      promocao.Chamada = this.Chamada;
      promocao.Regras = this.Regras
      promocao.EnderecoURL = this.URL

      console.log(promocao)

      this.signalrService.CadatrarPromocao(promocao);

    }
}
