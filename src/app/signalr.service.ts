import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr'; // Importa SignalR
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Subject } from 'rxjs'; // Para emitir valores quando as mensagens chegarem
import { Promocao } from './models/promocao';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
// Propriedades
  private hubConnection: HubConnection
  constructor() { }

   // Método para iniciar a conexão
   public startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7230/PromoHub',{ withCredentials: false})
       // URL do Hub SignalR na API
      .build();

    // Iniciar a conexão
    this.hubConnection
      .start()
      .then(() => console.log('Conexão SignalR iniciada'))
      .catch(err => console.log('Erro ao iniciar conexão: ' + err));
  }

  // Método para enviar uma mensagem ao servidor
  public CadatrarPromocao(promocao : Promocao): void {
    this.hubConnection.invoke('CadastrarPromocao', promocao)
    .then(()=>{
      console.log("Cadastrado com sucesso!")
    })
    .catch(err => console.error(err));
  }

  // Método para receber mensagens do servidor
  // public addMessageListener(): void {
  //   this.hubConnection.on('ReceiveMessage', (user: string, message: string) => {
  //     this.messageReceived.next(`${user}: ${message}`);
  //   });
  // }

  // // Método para expor as mensagens recebidas como Observable
  // public getMessageObservable() {
  //   return this.messageReceived.asObservable();
  // }

}
