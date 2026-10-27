import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { AvaliacaoService } from '../../services/avaliacao.service';
import { NovaAvaliacao, PratoAvaliado } from '../../models';

@Component({
  selector: 'app-avaliacoes',
  standalone: true,
  imports: [IonContent, FormsModule],
  templateUrl: './avaliacoes.page.html',
  styleUrls: ['./avaliacoes.page.scss'],
})
export class AvaliacoesPage {
  formAberto = false;
  estrelasOpcoes = [1, 2, 3, 4, 5];
  nova: NovaAvaliacao = { prato: '', nota: 0, comentario: '' };

  constructor(private service: AvaliacaoService, private router: Router) {}

  get pratos(): PratoAvaliado[] { return this.service.pratos; }

  estrelas(nota: number): string {
    const n = Math.round(nota);
    return '★'.repeat(n) + '☆'.repeat(5 - n);
  }

  formatar(nota: number): string { return nota.toFixed(1).replace('.', ','); }

  abrirForm() { this.formAberto = !this.formAberto; }

  enviar() {
    if (!this.nova.prato || !this.nova.nota) return;
    this.service.avaliar(this.nova);
    this.nova = { prato: '', nota: 0, comentario: '' };
    this.formAberto = false;
  }

  voltar() { this.router.navigateByUrl('/menu'); }
}
