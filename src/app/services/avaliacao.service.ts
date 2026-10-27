import { Injectable } from '@angular/core';
import { NovaAvaliacao, PratoAvaliado } from '../models';

@Injectable({ providedIn: 'root' })
export class AvaliacaoService {
  pratos: PratoAvaliado[] = [
    { nome: 'Feijoada', nota: 4.6, quantidade: 10, comentario: 'gostosa, um pouco salgada' },
    { nome: 'Strogonoff', nota: 3.2, quantidade: 10, comentario: 'faltou arroz' },
    { nome: 'Salada', nota: 4.9, quantidade: 10, comentario: 'fresca' },
  ];

  avaliar(a: NovaAvaliacao): void {
    const p = this.pratos.find((x) => x.nome === a.prato);
    if (!p) return;
    p.nota = (p.nota * p.quantidade + a.nota) / (p.quantidade + 1);
    p.quantidade += 1;
    if (a.comentario.trim()) p.comentario = a.comentario.trim();
  }
}
