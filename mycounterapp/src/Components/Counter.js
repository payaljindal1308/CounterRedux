
import { increment, decrement } from '../Redux/Action/actions';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../Redux/Store/store';
function Counter(props) {
  const count = useSelector(state => state.createCounterReducer[props.name]);
  const dispatch = useDispatch();
  console.log(store.getState())
  return (
    <div className="App">
    <h3>{count}</h3>
    <button onClick={() => dispatch(increment(props.name))}>Increment</button>
    <button onClick={() => dispatch({type: `DECREMENT`, name: props.name})}>Decrement</button>
    </div>
  )
}
export default Counter