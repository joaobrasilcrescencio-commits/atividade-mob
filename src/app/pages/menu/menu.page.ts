import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { OrderService } from '../../services/order.service';
import { CardapioService } from '../../services/cardapio.service';
import { FiltroCardapio, ItemCardapio, OpcaoFiltro } from '../../models';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [IonContent],
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  filtro: FiltroCardapio = 'todos';
  selecionados = new Set<string>();

  constructor(private cardapio: CardapioService, private auth: AuthService, private order: OrderService, private router: Router) {}

  get itens(): ItemCardapio[] { return this.cardapio.itens; }
  get filtros(): OpcaoFiltro[] { return this.cardapio.filtros; }
  get nome() { return this.auth.firstName; }
  get visiveis(): ItemCardapio[] { return this.cardapio.filtrar(this.filtro); }
  get temEsgotado() { return this.visiveis.some((i) => i.esgotado); }

  toggle(i: ItemCardapio) {
    if (i.esgotado) return;
    this.selecionados.has(i.nome) ? this.selecionados.delete(i.nome) : this.selecionados.add(i.nome);
  }

  fazerPedido() {
    this.order.create(this.itens.filter((i) => this.selecionados.has(i.nome)).map((i) => i.nome));
    this.router.navigateByUrl('/order');
  }

  avaliacoes() { this.router.navigateByUrl('/avaliacoes'); }

  async sair() { await this.auth.logout(); this.router.navigateByUrl('/login', { replaceUrl: true }); }
}
