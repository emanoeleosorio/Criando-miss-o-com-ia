const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntasSustentabilidade = [
    {
        enunciado: "Você está caminhando pelo parque e percebe que muitas pessoas jogam lixo no chão. Qual sua reação?",
        alternativas: [
            {
                texto: "Ignoro, pois acho que não posso mudar o comportamento de todos.",
                afirmacao: "Decidi não fazer nada, mesmo sabendo que isso prejudica o meio ambiente."
            },
            {
                texto: "Peço gentilmente para as pessoas jogarem o lixo no local adequado.",
                afirmacao: "Decidi agir para incentivar a conscientização ambiental."
            }
        ]
    },
    {
        enunciado: "Sua escola está pensando em começar um projeto de coleta seletiva de lixo. Como você participa?",
        alternativas: [
            {
                texto: "Participo ativamente, ajudando na separação e incentivo meus colegas a fazerem o mesmo.",
                afirmacao: "Minha postura contribui para uma escola mais sustentável."
            },
            {
                texto: "Acho importante, mas não me esforço muito para ajudar.",
                afirmacao: "Reconheço a importância, mas preciso me envolver mais."
            }
        ]
    },
    {
        enunciado: "Você decide plantar uma árvore na sua comunidade. Como planeja fazer isso?",
        alternativas: [
            {
                texto: "Procuro um espaço adequado, reúno amigos e começo a plantar a árvore com cuidado.",
                afirmacao: "Acho que ações simples podem ter um grande impacto no meio ambiente."
            },
            {
                texto: "Deixo para os responsáveis, pois não sei como fazer corretamente.",
                afirmacao: "Reconheço a importância, mas ainda tenho dúvidas sobre como contribuir efetivamente."
            }
        ]
    },
    {
        enunciado: "Você está pensando em reduzir seu consumo de energia em casa. Qual ação você toma?",
        alternativas: [
            {
                texto: "Desligo aparelhos eletrônicos que não estou usando e uso lâmpadas LED.",
                afirmacao: "Ações pequenas ajudam a diminuir o impacto ambiental."
            },
            {
                texto: "Não mudo meus hábitos, acho que minha contribuição é pequena demais.",
                afirmacao: "Percebo que cada ação conta e posso fazer minha parte."
            }
        ]
    },
    {
        enunciado: "Na hora de ir para a escola ou trabalho, qual meio de transporte você costuma usar?",
        alternativas: [
            {
                texto: "Uso transporte público ou vou de bicicleta sempre que possível.",
                afirmacao: "Procuro opções sustentáveis para reduzir minha pegada de carbono."
            },
            {
                texto: "Prefiro usar carro particular mesmo que isso gere mais emissão de gases.",
                afirmacao: "Reconheço que posso melhorar meus hábitos para ajudar o planeta."
            }
        ]
    },
];

let atualSustentabilidade = 0;
let historiaFinalSustentabilidade = "";

function mostraPerguntaSustentabilidade() {
    if (atualSustentabilidade >= perguntasSustentabilidade.length) {
        mostraResultadoSustentabilidade();
        return;
    }
    const perguntaAtualSustentabilidade = perguntasSustentabilidade[atualSustentabilidade];
    caixaPerguntas.textContent = perguntaAtualSustentabilidade.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativasSustentabilidade(perguntaAtualSustentabilidade);
}

function mostraAlternativasSustentabilidade(pergunta) {
    for (const alternativa of pergunta.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionadaSustentabilidade(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionadaSustentabilidade(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinalSustentabilidade += afirmacao + " ";
    atualSustentabilidade++;
    mostraPerguntaSustentabilidade();
}

function mostraResultadoSustentabilidade() {
    // Esconder as caixas de perguntas e alternativas
    caixaPerguntas.textContent = "Sobre suas atitudes ambientais...";
    caixaAlternativas.textContent = "";

    // Exibir o resultado final
    textoResultado.textContent = historiaFinalSustentabilidade;

    // Opcional: Adicionar um botão para reiniciar o quiz
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Refazer o questionário";
    botaoReiniciar.addEventListener("click", () => {
        // Reiniciar variáveis
        historiaFinalSustentabilidade = "";
        atualSustentabilidade = 0;
        // Opcional: limpar o conteúdo do resultado
        textoResultado.textContent = "";
        // Mostrar a primeira pergunta novamente
        mostraPerguntaSustentabilidade();
    });
    // Adicionar o botão ao container de resultado
    caixaResultado.appendChild(botaoReiniciar);
}

// Inicializar o quiz
mostraPerguntaSustentabilidade();
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntasSustentabilidade = [
    {
        enunciado: "Você está caminhando pelo parque e percebe que muitas pessoas jogam lixo no chão. Qual sua reação?",
        alternativas: [
            {
                texto: "Ignoro, pois acho que não posso mudar o comportamento de todos.",
                afirmacao: "Decidi não fazer nada, mesmo sabendo que isso prejudica o meio ambiente."
            },
            {
                texto: "Peço gentilmente para as pessoas jogarem o lixo no local adequado.",
                afirmacao: "Decidi agir para incentivar a conscientização ambiental."
            }
        ]
    },
    {
        enunciado: "Sua escola está pensando em começar um projeto de coleta seletiva de lixo. Como você participa?",
        alternativas: [
            {
                texto: "Participo ativamente, ajudando na separação e incentivo meus colegas a fazerem o mesmo.",
                afirmacao: "Minha postura contribui para uma escola mais sustentável."
            },
            {
                texto: "Acho importante, mas não me esforço muito para ajudar.",
                afirmacao: "Reconheço a importância, mas preciso me envolver mais."
            }
        ]
    },
    {
        enunciado: "Você decide plantar uma árvore na sua comunidade. Como planeja fazer isso?",
        alternativas: [
            {
                texto: "Procuro um espaço adequado, reúno amigos e começo a plantar a árvore com cuidado.",
                afirmacao: "Acho que ações simples podem ter um grande impacto no meio ambiente."
            },
            {
                texto: "Deixo para os responsáveis, pois não sei como fazer corretamente.",
                afirmacao: "Reconheço a importância, mas ainda tenho dúvidas sobre como contribuir efetivamente."
            }
        ]
    },
    {
        enunciado: "Você está pensando em reduzir seu consumo de energia em casa. Qual ação você toma?",
        alternativas: [
            {
                texto: "Desligo aparelhos eletrônicos que não estou usando e uso lâmpadas LED.",
                afirmacao: "Ações pequenas ajudam a diminuir o impacto ambiental."
            },
            {
                texto: "Não mudo meus hábitos, acho que minha contribuição é pequena demais.",
                afirmacao: "Percebo que cada ação conta e posso fazer minha parte."
            }
        ]
    },
    {
        enunciado: "Na hora de ir para a escola ou trabalho, qual meio de transporte você costuma usar?",
        alternativas: [
            {
                texto: "Uso transporte público ou vou de bicicleta sempre que possível.",
                afirmacao: "Procuro opções sustentáveis para reduzir minha pegada de carbono."
            },
            {
                texto: "Prefiro usar carro particular mesmo que isso gere mais emissão de gases.",
                afirmacao: "Reconheço que posso melhorar meus hábitos para ajudar o planeta."
            }
        ]
    },
];

let atualSustentabilidade = 0;
let historiaFinalSustentabilidade = "";

function mostraPerguntaSustentabilidade() {
    if (atualSustentabilidade >= perguntasSustentabilidade.length) {
        mostraResultadoSustentabilidade();
        return;
    }
    const perguntaAtualSustentabilidade = perguntasSustentabilidade[atualSustentabilidade];
    caixaPerguntas.textContent = perguntaAtualSustentabilidade.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativasSustentabilidade(perguntaAtualSustentabilidade);
}

function mostraAlternativasSustentabilidade(pergunta) {
    for (const alternativa of pergunta.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionadaSustentabilidade(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionadaSustentabilidade(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinalSustentabilidade += afirmacao + " ";
    atualSustentabilidade++;
    mostraPerguntaSustentabilidade();
}

function mostraResultadoSustentabilidade() {
    // Esconder as caixas de perguntas e alternativas
    caixaPerguntas.textContent = "Sobre suas atitudes ambientais...";
    caixaAlternativas.textContent = "";

    // Exibir o resultado final
    textoResultado.textContent = historiaFinalSustentabilidade;

    // Opcional: Adicionar um botão para reiniciar o quiz
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Refazer o questionário";
    botaoReiniciar.addEventListener("click", () => {
        // Reiniciar variáveis
        historiaFinalSustentabilidade = "";
        atualSustentabilidade = 0;
        // Opcional: limpar o conteúdo do resultado
        textoResultado.textContent = "";
        // Mostrar a primeira pergunta novamente
        mostraPerguntaSustentabilidade();
    });
    // Adicionar o botão ao container de resultado
    caixaResultado.appendChild(botaoReiniciar);
}

// Inicializar o quiz
mostraPerguntaSustentabilidade();
