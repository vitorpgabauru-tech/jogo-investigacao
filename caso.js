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
  { nome: "Dona Alzira", relato: "Ouviu \"um tiro\" por volta das 22h15" },
  { nome: "Porteiro Jonas", relato: "Viu Ricardo entrar às 20h45 e sair apressado perto de 23h20" },
  { nome: "Garçom do Bar Vesúvio", relato: "Confunde o dia do almoço entre Henrique e Délcio" },
  { nome: "Aurélio (colega de redação)", relato: "Ouviu Henrique dizer que \"tem gente demais interessada\" no que escrevia" },
  { nome: "Zilda (empregada doméstica)", relato: "Encontrou o corpo; notou que uma pasta de documentos havia sumido" },
  { nome: "Informante anônimo", relato: "Bilhete alegando ter visto um carro oficial parado na rua" }
];

const evidencias = [
  { tipo: "Física", descricao: "Marcas de luta na sala", forca: "Confirma confronto, não identifica autor" },
  { tipo: "Física", descricao: "Ausência de resíduo de pólvora na cena", forca: "Contradiz a hipótese do tiro" },
  { tipo: "Física", descricao: "Relógio de pulso quebrado, parado às 23h10", forca: "Ancora o horário aproximado do golpe" },
  { tipo: "Testemunhal", descricao: "Depoimento da Dona Alzira sobre o tiro", forca: "Pista falsa, mas sincera" },
  { tipo: "Testemunhal", descricao: "Depoimento do porteiro Jonas", forca: "Situa Ricardo na cena, horário compatível" },
  { tipo: "Testemunhal", descricao: "Confusão do garçom sobre o dia do almoço", forca: "Ilustra falha de memória, não mentira" },
  { tipo: "Documental", descricao: "Carta não enviada de Henrique para Beatriz", forca: "Revela o caso amoroso" },
  { tipo: "Documental", descricao: "Recibo de empréstimo fora dos livros da cooperativa", forca: "Aponta desvio de Ricardo" },
  { tipo: "Documental", descricao: "Rascunho da reportagem de Henrique", forca: "Liga o crime ao contexto político/financeiro" },
  { tipo: "Documental", descricao: "Relatório policial oficial, assinado por Cardoso", forca: "Encerra o caso rápido demais" },
  { tipo: "Circunstancial", descricao: "Chave de Délcio encontrada no apartamento", forca: "Pista falsa política" },
  { tipo: "Circunstancial", descricao: "Álibi de Ricardo (reunião até meia-noite)", forca: "Contestado pelo porteiro Jonas" },
  { tipo: "Circunstancial", descricao: "Bilhete do informante sobre carro oficial", forca: "Abre linha de investigação sobre a Falcão" },
  { tipo: "Ausência", descricao: "Pasta de vigilância desaparecida, relatada por Zilda", forca: "Nunca aparece no relatório oficial" }
];
