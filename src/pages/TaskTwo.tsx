import React, { useState } from "react";
import { Button } from "antd";
import List from "../components/List";

interface dataEl {
  id: number;
  timeLeft: number;
}

const TaskTwo: React.FC = () => {
  const [data, setData] = useState<dataEl[]>([]);

  const addElement = () => {
    const randomTime = Math.floor(Math.random() * (30 - 10) + 10);
    const newElement = {
      id: Number(String(Date.now()).slice(6)),
      timeLeft: randomTime,
    };
    setData((state) => [...state, newElement]);
  };
  const removeItemById = (id: number) => {
    setData((prevData) => prevData.filter((el) => el.id !== id));
  };

  return (
    <>
      <div>
        <p>
          Задание 2. Вам необходимо сделать функциональными компонентами
          следующую задачу: На странице есть список и кнопка добавления в этот
          список нового элемента. Каждый элемент списка отображает свой
          порядковый номер и обратный отсчет в секундах до его автоматического
          удаления из списка. Каждый добавленный элемент, должен находится в нем
          случайное количество секунд от 10 до 30. При исчезновении во всем
          списке пересчитывается порядковый номер.
        </p>
        <p>
          Пример: Пользователь нажал на кнопку добавить три раза. В списке
          появилось три элемента. 1. Исчезнет через 13 секунд 2. Исчезнет через
          25 секунд 3. Исчезнет через 15 секунд. По истечению 13 секунд, из
          списка будет удален 1 элемент. И он станет вот таким: 1. Исчезнет
          через 12 секунд 2. Исчезнет через 2 секунды
        </p>
      </div>

      <Button type="primary" className="input" onClick={addElement}>
        Добавить элемент
      </Button>

      <List data={data} removeItem={removeItemById} />
    </>
  );
};

export default TaskTwo;
