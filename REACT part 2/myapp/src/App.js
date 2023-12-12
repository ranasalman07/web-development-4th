import './App.css';
import FirstComponent from './Components/First/FirstComponent';
import Second from './Components/Second/Second';

let a = "my name is khan";

function App() {
  return (
    <div className="App">
      Rana Salman
      <FirstComponent abc={a}/>
      <Second/>
    </div>
  );
}

export default App;
