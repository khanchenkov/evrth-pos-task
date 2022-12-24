import React, { useState } from "react";
import { Input } from "antd";

const TaskOne: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const inputHandler = (e: any) => {
    const string = e.target!.value;
    setValue(string);
  };

  const onInputBlur = () => {
    if (!value) {
      setMessage("");
      return undefined;
    }

    const symbolsArr: String[] = value.split("");

    let parentheses: string = "",
      squareBrackets: string = "",
      curlyBrackets: string = "";

    for (let symbol of symbolsArr) {
      if (symbol === "(" || symbol === ")") {
        parentheses += symbol;
        continue;
      }
      if (symbol === "[" || symbol === "]") {
        squareBrackets += symbol;
        continue;
      }
      if (symbol === "{" || symbol === "}") {
        curlyBrackets += symbol;
        continue;
      }
    }

    const bracketsStr = parentheses + squareBrackets + curlyBrackets;

    console.log(bracketsStr);

    const correctBrackets = bracketsStr.match(/\[\]|{}|\(\)/g);
    const incorrectBrackets = bracketsStr.replace(/\[\]|{}|\(\)/g, "");

    setMessage(
      `Правильные скобки: ${correctBrackets || "Нет"} (${
        correctBrackets ? correctBrackets.length * 2 : 0
      } шт.)
      Неправильные скобки: ${incorrectBrackets || "Нет"} (${
        incorrectBrackets ? incorrectBrackets.length : 0
      } шт.)`
    );
  };

  return (
    <>
      <p>
        Задание 1. Дана строка, содержащая скобки трёх видов (круглые,
        квадратные и фигурные) и любые другие символы. Посчитайте сколько скобок
        расставлено корректно а сколько нет.
      </p>
      <p>
        Например, в строке {`([]{})[]`} скобки расставлены корректно, а в строке
        ([]] — нет. В первом случае правильно расставлено 8 скобок. Во втором
        случае указаны 2 скобки правильно, и 2 не правильно.
      </p>

      <Input
        value={value}
        onChange={inputHandler}
        onBlur={onInputBlur}
        className="input"
      />
      {message && <p>{message}</p>}
    </>
  );
};

export default TaskOne;
