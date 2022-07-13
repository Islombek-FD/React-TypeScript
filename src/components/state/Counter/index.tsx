import React, { useReducer } from 'react';

type CounterState = {
   count: number
}

type UpdateAction = {
   type: 'increment' | 'decrement'
   payload: number
}

type ResetAction = {
   type: 'reset'
}

type CounterAction = UpdateAction | ResetAction;

const reducer = (state: CounterState, action: CounterAction) => {
   switch (action.type) {
      case 'increment': 
         return { count: state.count + action.payload };
      case 'decrement': 
         return { count: state.count - action.payload };
      case 'reset': 
         return { count: 0 };
      default:
         return state;   
   }
}

function Counter() {
   const [state, dispatch] = useReducer(reducer, { count: 0 });

   return (
      <div>
         <h2>Counter: {state.count}</h2>

         <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Inc +10</button>
         <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Dec -10</button>
         <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
   )
}

export default Counter;