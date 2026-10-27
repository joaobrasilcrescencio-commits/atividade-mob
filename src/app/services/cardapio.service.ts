import { Injectable } from '@angular/core';
import { FiltroCardapio, ItemCardapio, OpcaoFiltro } from '../models';

@Injectable({ providedIn: 'root' })
export class CardapioService {
  readonly itens: ItemCardapio[] = [
    { nome: 'Arroz + feijao', tipo: 'comum' },
    { nome: 'Opcao vegana', tipo: 'veg' },
    { nome: 'Frango grelhado', tipo: 'comum' },
    { nome: 'Salada', tipo: 'veg', esgotado: true },
    { nome: 'Sobremesa', tipo: 'comum' },
  ];

  readonly filtros: OpcaoFiltro[] = [
    { id: 'veg', label: 'Veg' },
    { id: 'comum', label: 'Comum' },
    { id: 'todos', label: 'Todos' },
  ];

  filtrar(filtro: FiltroCardapio): ItemCardapio[] {
    return this.itens.filter((i) => filtro === 'todos' || i.tipo === filtro);
  }
}
