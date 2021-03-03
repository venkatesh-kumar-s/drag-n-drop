import './App.css';
import Drag from './Drag';
import Drop from './Drop';

function App() {

  return (
    <div className="App" >
      <div style={{backgroundColor:'yellow'}}>
        <h1>Drag n Drop using React Hooks and Redux</h1>
      </div>
     <Drag/>
     <Drop/>
    </div>
  );
}

export default App;
