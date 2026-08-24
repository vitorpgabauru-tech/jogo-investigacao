const suspeitos = [
  { nome: "Ricardo Meireles", motivo: "Financeiro — a reportagem o incriminaria", revelaMotivoPista: "recibo-cooperativa" },
  { nome: "Beatriz Meireles", motivo: "Encobrir o caso extraconjugal, medo do marido", revelaMotivoPista: "carta-beatriz" },
  { nome: "Coronel Vasconcelos", motivo: "Político — citado na reportagem sobre contratos militares", revelaMotivoPista: "rascunho-reportagem" },
  { nome: "Délcio Ramos", motivo: "Tinha chave do apartamento; ligado a grupo vigiado", revelaMotivoPista: "delcio-chave" },
  { nome: "Setembrina Alves", motivo: "Temia que a matéria fechasse o jornal", revelaMotivoPista: null },
  { nome: "Otávio Lacerda", motivo: "Disputa antiga por herança da mãe", revelaMotivoPista: null },
  { nome: "Agente Milton Cardoso", motivo: "Vigilância política — encobrimento, não crime", revelaMotivoPista: "informante" }
];

const pistas = [
  { id: "marcas-luta", tipo: "Física", nome: "Marcas de luta na sala", conteudo: "Há marcas de luta espalhadas pela sala de estar — uma cadeira virada, papéis no chão.", forca: "Confirma confronto, não identifica autor", requer: [], descoberta: false },
  { id: "relogio", tipo: "Física", nome: "Relógio de pulso quebrado", conteudo: "Um relógio de pulso, quebrado, parado exatamente às 23h10, encontrado perto do corpo.", forca: "Ancora o horário aproximado do golpe", requer: [], descoberta: false },
  { id: "zilda", tipo: "Testemunho", nome: "Zilda (empregada doméstica)", conteudo: "\"Fui eu que encontrei o corpo, de manhã, quando vim fazer a limpeza. Reparei que a pasta de couro que ele sempre deixava sobre a escrivaninha não estava lá. Ele nunca saía sem trancar aquela pasta.\"", requer: [], descoberta: false },
  { id: "aurelio", tipo: "Testemunho", nome: "Aurélio (colega de redação)", conteudo: "\"O Henrique andava tenso nos últimos dias. Pouco antes de tudo, ele me disse, meio de brincadeira, que 'tem gente demais interessada' no que ele andava escrevendo. Não dei importância na hora.\"", requer: [], descoberta: false },
  { id: "alzira", tipo: "Testemunho", nome: "Dona Alzira (vizinha)", conteudo: "\"Eu estava na janela, quase dormindo, quando ouvi um estampido lá pelas dez e quinze da noite. Parecia um tiro, tenho certeza. Não vi ninguém, só ouvi.\"", forca: "Pista falsa, mas sincera", requer: [], descoberta: false },
  { id: "porteiro", tipo: "Testemunho", nome: "Porteiro Jonas", conteudo: "\"O senhor Ricardo chegou por volta das oito e quarenta e cinco. Perto das onze e vinte vi um homem apressado saindo pela portaria — não vi o rosto direito, mas a estatura parecia a dele. Também sei que ele almoçava direto no Bar Vesúvio, aqui na esquina.\"", forca: "Situa Ricardo na cena, horário compatível", requer: [], descoberta: false },
  { id: "sem-polvora", tipo: "Física", nome: "Ausência de resíduo de pólvora", conteudo: "A perícia não encontrou nenhum resíduo de pólvora na cena, nem ferimento compatível com arma de fogo.", forca: "Contradiz a hipótese do tiro ouvido por Dona Alzira", requer: ["marcas-luta"], descoberta: false },
  { id: "carta-beatriz", tipo: "Documental", nome: "Carta não enviada", conteudo: "Uma carta de Henrique para Beatriz Meireles, nunca enviada, encontrada numa gaveta do quarto. O texto deixa claro que os dois mantinham um caso.", forca: "Revela o caso amoroso entre Henrique e Beatriz", requer: ["relogio"], descoberta: false },
  { id: "pasta-desaparecida", tipo: "Ausência", nome: "Pasta de documentos desaparecida", conteudo: "Segundo Zilda, a pasta de couro que Henrique sempre trancava na escrivaninha não estava mais lá quando o corpo foi encontrado.", forca: "Nunca aparece mencionada no relatório policial oficial", requer: ["zilda"], descoberta: false },
  { id: "rascunho-reportagem", tipo: "Documental", nome: "Rascunho da reportagem de Henrique", conteudo: "Um rascunho encontrado na redação, sobre irregularidades em contratos militares e desvio de verbas de uma cooperativa de crédito.", forca: "Liga o crime ao contexto político e financeiro", requer: ["aurelio"], descoberta: false },
  { id: "alibi-ricardo", tipo: "Circunstancial", nome: "Álibi de Ricardo Meireles", conteudo: "Ricardo afirma ter passado a noite numa reunião de trabalho até a meia-noite.", forca: "Contestado pelo porteiro Jonas, que o viu saindo do prédio de Henrique às 23h20", requer: ["porteiro"], descoberta: false },
  { id: "garcom", tipo: "Testemunho", nome: "Garçom do Bar Vesúvio", conteudo: "\"O senhor Henrique almoçava aqui quase toda semana com um rapaz mais novo, parecia estudante. Foi uns dois ou três dias antes do que aconteceu — não tenho certeza do dia exato.\"", forca: "Ilustra falha de memória, não mentira", requer: ["porteiro"], descoberta: false },
  { id: "recibo-cooperativa", tipo: "Documental", nome: "Recibo de empréstimo irregular", conteudo: "Um recibo de empréstimo que não consta nos livros oficiais da cooperativa, assinado por Ricardo Meireles.", forca: "Aponta desvio de dinheiro por parte de Ricardo", requer: ["rascunho-reportagem"], descoberta: false },
  { id: "informante", tipo: "Testemunho", nome: "Informante anônimo (bilhete)", conteudo: "Bilhete entregue à delegacia dias depois: \"Vi um carro parado na rua na noite em que aquele homem morreu. Achei estranho — carro de gente do governo, dava pra perceber pela placa.\"", forca: "Abre a linha de investigação sobre uma possível vigilância política", requer: ["rascunho-reportagem"], descoberta: false },
  { id: "delcio-chave", tipo: "Circunstancial", nome: "Chave de Délcio no apartamento", conteudo: "Uma cópia da chave do apartamento de Henrique é encontrada com Délcio Ramos, amigo de infância e estudante.", forca: "Délcio confirma ter passado lá na tarde anterior para buscar uma caixa — pista falsa política", requer: ["garcom"], descoberta: false },
  { id: "relatorio-policial", tipo: "Documental", nome: "Relatório policial oficial", conteudo: "O relatório oficial, assinado pelo agente Milton Cardoso, encerra o caso rapidamente citando \"elementos subversivos\", sem mencionar a pasta desaparecida nem o carro visto pelo informante.", forca: "Encerra o caso rápido demais — indício de encobrimento", requer: ["informante"], descoberta: false }
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
