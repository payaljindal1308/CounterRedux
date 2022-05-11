
import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import { useDispatch, useSelector } from 'react-redux';
function App() {

  const [id, setId] = useState(0)
  const dispatch = useDispatch()
  const state = useSelector(state => state.createCounterReducer);
  const onAddCounter = () => {
    setId(id+1)
    dispatch({type: 'ADDCOUNTER', name: id})
  }
  return (
    <div className='container'>
    <button id="ADD" onClick={() => onAddCounter()}>Add Counter</button>
    {Object.keys(state).map((counter,index) => (
      <div className="counter" key={counter}>
      <Counter name={index}></Counter></div>
    ))}
   
    </div>)
}

export default App
