import { useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // automatically sets up a subscription for this component (changes to counter state will re-execute this component)
  const counter = useSelector((state) => state.counter); //retrieves the part of the state which we extract (in this case counter)

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
