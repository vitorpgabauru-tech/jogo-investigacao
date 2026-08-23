const suspeitos = [
  { nome: "Ricardo Meireles", motivo: "Financeiro — a reportagem o incriminaria" },
  { nome: "Beatriz Meireles", motivo: "Encobrir o caso extraconjugal, medo do marido" },
  { nome: "Coronel Vasconcelos", motivo: "Político — citado na reportagem sobre contratos militares" },
  { nome: "Délcio Ramos", motivo: "Tinha chave do apartamento; ligado a grupo vigiado" },
  { nome: "Setembrina Alves", motivo: "Temia que a matéria fechasse o jornal" },
  { nome: "Otávio Lacerda", motivo: "Disputa antiga por herança da mãe" },
  { nome: "Agente Milton Cardoso", motivo: "Vigilância política — encobrimento, não crime" }
];

const testemunhas = [
  { nome: "Dona Alzira", papel: "vizinha", relato: "Eu estava na janela, quase dormindo, quando ouvi um estampido lá pelas dez e quinze da noite. Parecia um tiro, tenho certeza. Não vi ninguém, só ouvi." },
  { nome: "Porteiro Jonas", papel: "porteiro do prédio", relato: "O senhor Ricardo chegou por volta das oito e quarenta e cinco. Perto das onze e vinte vi um homem apressado saindo pela portaria — não vi o rosto direito, mas a estatura parecia a dele." },
  { nome: "Garçom do Bar Vesúvio", papel: "garçom", relato: "O senhor Henrique almoçava aqui quase toda semana com um rapaz mais novo, parecia estudante. Foi uns dois ou três dias antes do que aconteceu — não tenho certeza do dia exato." },
  { nome: "Aurélio", papel: "colega de redação", relato: "O Henrique andava tenso nos últimos dias. Pouco antes de tudo, ele me disse, meio de brincadeira, que 'tem gente demais interessada' no que ele andava escrevendo. Não dei importância na hora." },
  { nome: "Zilda", papel: "empregada doméstica", relato: "Fui eu que encontrei o corpo, de manhã, quando vim fazer a limpeza. Reparei que a pasta de couro que ele sempre deixava sobre a escrivaninha não estava lá. Ele nunca saía sem trancar aquela pasta." },
  { nome: "Informante anônimo", papel: "bilhete entregue à delegacia", relato: "Vi um carro parado na rua na noite em que aquele homem morreu. Achei estranho — carro de gente do governo, dava pra perceber pela placa." }
];

const evidencias = [
  { tipo: "Física", descricao: "Marcas de luta na sala", forca: "Confirma confronto, não identifica autor", descoberta: false },
  { tipo: "Física", descricao: "Ausência de resíduo de pólvora na cena", forca: "Contradiz a hipótese do tiro", descoberta: false },
  { tipo: "Física", descricao: "Relógio de pulso quebrado, parado às 23h10", forca: "Ancora o horário aproximado do golpe", descoberta: false },
  { tipo: "Testemunhal", descricao: "Depoimento da Dona Alzira sobre o tiro", forca: "Pista falsa, mas sincera", descoberta: false },
  { tipo: "Testemunhal", descricao: "Depoimento do porteiro Jonas", forca: "Situa Ricardo na cena, horário compatível", descoberta: false },
  { tipo: "Testemunhal", descricao: "Confusão do garçom sobre o dia do almoço", forca: "Ilustra falha de memória, não mentira", descoberta: false },
  { tipo: "Documental", descricao: "Carta não enviada de Henrique para Beatriz", forca: "Revela o caso amoroso", descoberta: false },
  { tipo: "Documental", descricao: "Recibo de empréstimo fora dos livros da cooperativa", forca: "Aponta desvio de Ricardo", descoberta: false },
  { tipo: "Documental", descricao: "Rascunho da reportagem de Henrique", forca: "Liga o crime ao contexto político/financeiro", descoberta: false },
  { tipo: "Documental", descricao: "Relatório policial oficial, assinado por Cardoso", forca: "Encerra o caso rápido demais", descoberta: false },
  { tipo: "Circunstancial", descricao: "Chave de Délcio encontrada no apartamento", forca: "Pista falsa política", descoberta: false },
  { tipo: "Circunstancial", descricao: "Álibi de Ricardo (reunião até meia-noite)", forca: "Contestado pelo porteiro Jonas", descoberta: false },
  { tipo: "Circunstancial", descricao: "Bilhete do informante sobre carro oficial", forca: "Abre linha de investigação sobre a Falcão", descoberta: false },
  { tipo: "Ausência", descricao: "Pasta de vigilância desaparecida, relatada por Zilda", forca: "Nunca aparece no relatório oficial", descoberta: false }
];

const verdade = {
  culpado: "Ricardo Meireles"
};

const briefing = {
  titulo: "O Silêncio da Rua Almirante",
  vitima: "Henrique Lacerda, 34 anos, jornalista",
  local: "Rua Almirante Alexandrino, 118, apto 302, Santa Teresa, Rio de Janeiro",
  data: "Corpo encontrado em 15 de outubro de 1968; morte estimada na noite anterior",
  texto: "Rio de Janeiro, outubro de 1968. A cidade vive sob censura crescente e vigilância constante — poucos meses depois da Passeata dos Cem Mil, poucas semanas antes do que ninguém ainda sabe que está por vir. Nesse clima, chega a notícia: Henrique Lacerda, jornalista conhecido por reportagens incômodas, foi encontrado morto em seu apartamento em Santa Teresa. Não há arma na cena. Não há testemunha que tenha visto tudo — só fragmentos: um relógio parado, uma discussão ouvida ao longe, uma pasta que desapareceu. Cabe a você, investigador designado para o caso, reconstruir o que aconteceu na noite de 14 de outubro — e decidir, ao final, em quem apontar o dedo."
};
