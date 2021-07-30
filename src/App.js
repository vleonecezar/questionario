import React from "react";
import Radio from "./Form/Radio";

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
    perguntas.reduce((acc, item) => {
      return { ...acc, [item.id]: "" };
    }, {})
  );

  const [slide, setSlide] = React.useState(0);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSlide();
  }

  function handleSlide() {
    if (slide < perguntas.length) {
      setSlide(slide + 1);
    } else {
      setSlide(false);
    }
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
      <button>Próxima</button>
    </form>
  );
};

export default App;
