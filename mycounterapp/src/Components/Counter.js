
import { increment, decrement } from '../Redux/Action/actions';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  console.log(count)
  return (
    <div className="App">
    <h3>{count}</h3>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}
export default Counter