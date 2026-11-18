import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PrestadorController extends Controller {
  @service servicos;
  @tracked nome = '';

  @action atualizar(campo, evento) {
    this[campo] = evento.target.value;
  }

  @action aceitar(id) {
    if (!this.nome) {
      alert('Informe seu nome antes de aceitar um trabalho.');
      return;
    }
    this.servicos.aceitar(id, this.nome);
  }

  @action concluir(id) {
    this.servicos.concluir(id);
  }
}
