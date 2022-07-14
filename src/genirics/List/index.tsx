import React from 'react';
import Item from '../Item';

type ListProps<T> = {
   items: T[];
   clickHandler: (value: T) => void;
}
 export type ItemValueProps = {
   id: number;
   first: string;
}

function List<T extends ItemValueProps>({ items, clickHandler } : ListProps<T>) {
  return (
    <div>
      <h3>Resuble list component</h3>

      <ul>
         { items.map(item => (
            <Item item={item} clickHandler={clickHandler} key={item.id} />
         ))}
      </ul>
    </div>
  )
}

export default List;