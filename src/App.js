import logo from './logo.svg';
import './App.css';
import { Counter } from './Redux/Counter';
import { changeval, clg, names } from './Redux/UserSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function App() {

  const value = useSelector((state) => state.print.value)
  const val = useSelector((state) => state.print.val)
  const name = useSelector((state) => state.print.names)
  const dispatch = useDispatch()
  console.log(value)
  return (
    <div className="App">
      <Counter />
      <button onClick={() => dispatch(clg())}>sss</button>
      {value}
    
    
      <select name="" id="" onChange={(e) => { dispatch(changeval(e.target.value)) }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      {val}
      <input type="text"  onChange={(e) => {dispatch(names(e.target.value)) }} name="" id="" />
      {name}
    </div>
  );
}

export default App;
