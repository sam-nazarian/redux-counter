// import { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // {connect}

import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch(); // returns a function

  // automatically sets up a subscription for this component (changes to counter state will re-execute this component)
  const counter = useSelector((state) => state.counter.counter); //retrieves the part of the state which we extract (in this case counter)
  const show = useSelector((state) => state.counter.showCounter); //go to counter slice, then get the showCounter from that state slice

  const incrementHandler = () => {
    //creates a full action object with type set to the unique indentifer which points to increment() in reducer
    dispatch(counterActions.increment());
    // dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // {type: SOME_UNIQUE_IDENTIFER, payload: 10}
    // dispatch({ type: 'increase', amount: 10 }); //attaching a payload to an action
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    // dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    // dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/*
class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter, //counter will be on the props
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }), //dispatch will be on the increment
    decrement: () => dispatch({ type: 'decrement' }),
  };
};

//connect returns a new function which we then execute (connect is a higher order component)
export default connect(mapStateToProps, mapDispatchToProps)(Counter); //redux, will manage a subscription
*/
