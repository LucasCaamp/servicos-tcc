import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SolicitanteController extends Controller {
  @service servicos;
  @tracked titulo = '';
  @tracked descricao = '';
  @tracked preco = '';
  @tracked nome = '';

  @action atualizar(campo, evento) {
    this[campo] = evento.target.value;
  }

  @action enviar(evento) {
    evento.preventDefault();
    if (!this.titulo) {
      alert('Título é obrigatório.');
      return;
    }
    if (!this.nome) {
      alert('Nome é obrigatório.');
      return;
    }
    this.servicos.criar({
      titulo: this.titulo,
      descricao: this.descricao,
      preco: this.preco,
      solicitante: this.nome,
    });
    this.titulo = this.descricao = this.preco = '';
  }
}
