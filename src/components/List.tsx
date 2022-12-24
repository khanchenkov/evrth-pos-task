import React from "react";
import ListItem from "./ListItem";

interface dataEl {
  id: number;
  timeLeft: number;
}
interface ListProps {
  data: dataEl[];
  removeItem: (id: number) => void;
}

const List: React.FC<ListProps> = ({ data, removeItem }) => {
  return (
    <ul className="list">
      {data.map((el, id) => (
        <ListItem
          key={el.id}
          itemTimeLeft={el.timeLeft}
          id={el.id}
          index={id}
          removeItem={removeItem}
        />
      ))}
    </ul>
  );
};

export default React.memo(List);
