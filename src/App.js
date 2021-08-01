import React from "react";
import Radio from "./Form/Radio";
import "./App.css";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState(
    perguntas.reduce((acc, pergunta) => {
      return { ...acc, [pergunta.id]: "" };
    }, {})
  );
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(false);

  // Atualiza o estado das respostas de acordo com item selecionado
  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  // Previne o envio do form e executa função de slide.
  function handleSubmit(event) {
    event.preventDefault();
    handleSlide();
  }

  // Atualiza o estado do slide, avançando p/ próxima questão.
  // esconde as questões, botão e executa função de resultado.
  function handleSlide() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(false);
      handleResultado();
    }
  }

  // filtra respostas corretas e exibe resultado na tela final.
  function handleResultado() {
    const corretas = perguntas.filter(
      ({ resposta, id }) => respostas[id] === resposta
    );
    setResultado(
      `Você acertou ${corretas.length} de ${perguntas.length} questões`
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {perguntas.map((pergunta, index) => (
        <Radio
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          active={slide === index}
          {...pergunta}
        />
      ))}
      {!resultado ? <button>Próxima</button> : <p>{resultado}</p>}
    </form>
  );
};

export default App;
