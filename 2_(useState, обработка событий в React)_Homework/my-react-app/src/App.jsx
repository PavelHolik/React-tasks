import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Paragraph } from "./components/Paragraph/Paragraph";
function App() {
  const [inputOne, setinputOne] = useState("");
  const [elements, setElements] = useState([]);
  const handleResetInputs = () => {
    setElements((prevState) => [inputOne, ...prevState]);
    setinputOne("");
    console.log(elements);
  };

  return (
    <>
      <div className="container">
        <div className="higherBlock">
        <Input
          value={inputOne}
          onChange={(event) => setinputOne(event.target.value)}
          placeholder="Введите текст для ToDo"
        />
        <Button onClick={handleResetInputs} />
        </div>
        {elements.map((text) => (
          <Paragraph key={text}>
            {text}
          </Paragraph>
        ))}
      </div>
    </>
  );
}

export default App;
