/** Prato exibido na tela de avaliações */
export interface PratoAvaliado {
  nome: string;
  nota: number;        // média de 0 a 5
  quantidade: number;  // quantas avaliações compõem a média
  comentario: string;  // último comentário
}

/** Dados do formulário "Avaliar um prato" */
export interface NovaAvaliacao {
  prato: string;
  nota: number;        // 1 a 5
  comentario: string;
}
