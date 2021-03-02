import './App.css';
import Drag from './Drag';
import Drop from './Drop';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const item = useSelector(state=>state);
  const dispatch = useDispatch();

  return (
    <div className="App" >
      <p>{item}</p>
     <Drag/>
     <Drop/>
    </div>
  );
}

export default App;
