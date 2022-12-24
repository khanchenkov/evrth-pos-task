import React, { useState, useEffect } from "react";

interface ListItemProps {
  id: number;
  index: number;
  itemTimeLeft: number;
  removeItem: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  id,
  index,
  itemTimeLeft,
  removeItem,
}) => {
  const [timeIndicator, setTimeIndicator] = useState<number>(itemTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeIndicator((indicator) => indicator - 1);
    }, 1000);

    if (timeIndicator === 0) {
      console.log(id, "removed");
      removeItem(id);
    }

    return () => clearInterval(interval);
  }, [timeIndicator, setTimeIndicator]);

  return (
    <li>
      <span>id: {index + 1}</span>
      <span>{timeIndicator} сек. осталось</span>
    </li>
  );
};

export default ListItem;
