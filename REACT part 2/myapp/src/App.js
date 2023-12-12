import './App.css';
import FirstComponent from './Components/First/FirstComponent';
import Second from './Components/Second/Second';

let a = "my name is khan";

function App() {
  function handleClick(){
    {console.log('Button is Pressed')}
  }

  return (
    <div className="App">
      Rana Salman
      <FirstComponent abc={a} clik={handleClick} />
      <Second/>
    </div>
  );
}

export default App;
