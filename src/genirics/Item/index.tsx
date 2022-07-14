import React from 'react';
import { ItemValueProps } from '../List';

type ItemProps<T> = {
   item: T;
   clickHandler: (value: T) => void;
}

function Item<T extends ItemValueProps>({ item, clickHandler }: ItemProps<T>) {
  return (
    <li onClick={() => clickHandler(item)}>
      {item.first}
    </li>
  )
}

export default Item;