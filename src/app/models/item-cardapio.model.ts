export type TipoItem = 'comum' | 'veg';
export type FiltroCardapio = TipoItem | 'todos';

/** Item da lista do cardápio (PRINTS.html) */
export interface ItemCardapio {
  nome: string;
  tipo: TipoItem;
  esgotado?: boolean;
}

/** Chip de filtro (Veg / Comum / Todos) */
export interface OpcaoFiltro {
  id: FiltroCardapio;
  label: string;
}
