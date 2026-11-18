import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

const KEY = 'pedidos-servicos';

export default class ServicosService extends Service {
  @tracked pedidos = [];

  constructor() {
    super(...arguments);
    try {
      this.pedidos = JSON.parse(localStorage.getItem(KEY)) ?? [];
    } catch {
      this.pedidos = [];
    }
  }

  get abertos() {
    return this.pedidos.filter((p) => p.status === 'aberto');
  }

  get emAndamento() {
    return this.pedidos.filter((p) => p.status === 'aceito');
  }

  criar(dados) {
    this.pedidos = [
      ...this.pedidos,
      { id: Date.now(), status: 'aberto', prestador: null, ...dados },
    ];
    this.salvar();
  }

  aceitar(id, prestador) {
    this.atualizar(id, { status: 'aceito', prestador });
  }

  concluir(id) {
    this.atualizar(id, { status: 'concluido' });
  }

  atualizar(id, mudancas) {
    this.pedidos = this.pedidos.map((p) => (p.id === id ? { ...p, ...mudancas } : p));
    this.salvar();
  }

  salvar() {
    localStorage.setItem(KEY, JSON.stringify(this.pedidos));
  }
}
