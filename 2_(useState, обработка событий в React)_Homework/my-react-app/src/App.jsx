import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Paragraph } from "./components/Paragraph/Paragraph";
function App() {
  const [inputOne, setinputOne] = useState("");
  const [inputTwo, setinputTwo] = useState("");
  const [elements, setElements] = useState([]);
  const [inputSearch, setinputSearch] = useState("");
  const [elementsWithSearch, setelementsWithSearch] = useState([]);
  const handleResetInputs = () => {
    setElements((prevState) => [
      {
        task: inputTwo,
        detail: inputOne,
      },
      ...prevState,
    ]);
    setinputOne("");
    setinputTwo("");
    console.log(elements);
  };
  const sortElements = (event) => {
    setinputSearch(event.target.value);

    if (elements.length) {
      setelementsWithSearch(
        elements.filter(
          (element) =>
            element.task.includes(event.target.value) ||
            element.detail.includes(event.target.value)
        )
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="higherBlock">
          <Input
            value={inputOne}
            onChange={(event) => setinputOne(event.target.value)}
            placeholder="Текст для ToDo"
          />
          <Input
            value={inputTwo}
            onChange={(event) => setinputTwo(event.target.value)}
            placeholder="Заголовок для ToDo"
          />
          <Button onClick={handleResetInputs} />
          <Input
            value={inputSearch}
            onChange={sortElements}
            placeholder="Поиск"
          />
        </div>

        {inputSearch
          ? elementsWithSearch.map((element) => (
              <Paragraph key={element.task}>
                {element.task}:{element.detail}
              </Paragraph>
            ))
          : elements.map((element) => (
              <Paragraph key={element.task}>
                {element.task}:{element.detail}
              </Paragraph>
            ))}
      </div>
    </>
  );
}

export default App;
