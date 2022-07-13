import { Component } from "react";


type CounterProps = {
   title: string
}

type CounterState = {
   count: number
}

export class Counter extends Component<CounterProps, CounterState> {
   state = {
      count: 0
   }

   incrementHandler = () => {
      this.setState((prevState) => ({count: prevState.count + 1}));
   }

   render() {
      return (
         <div>
            <h3>{this.props.title} - {this.state.count}</h3>

            <button onClick={this.incrementHandler}>Increment</button>
         </div>
      )
   }
}