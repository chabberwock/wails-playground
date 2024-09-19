import { useState, useEffect } from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import {Greet, Modules} from '../wailsjs/go/myapp/App';

function App() {
  const [resultText, setResultText] = useState(
    'Please enter your name below 👇'
  );
  const [name, setName] = useState('');
  const updateName = (e) => setName(e.target.value);
  const updateResultText = (result) => setResultText(result);
  const [Remote, setRemote] = useState(null);

  function greet() {
    Greet(name).then(updateResultText);
  }
  useEffect(() => {
    // В режиме dev вот так ../../modules/dist1/main работает, компонент из папки подгружается,
    // а в сбилденном виде все падает. Я так и не разобрался как правильно прописать путь.
    Modules().then(function(modules) {
      console.log(modules);
      for (let i=0;i<modules.length;i++) {
        import(/* @vite-ignore */ modules[i].path).then((module) => {
          setRemote(() => window.default);
        });
      }
    })
  }, []);

  return (
    <div id="App">
      <img src={logo} id="logo" alt="logo" />
      <div id="result" className="result">
        {resultText}
      </div>
      <div id="input" className="input-box">
        <input
          id="name"
          className="input"
          onChange={updateName}
          autoComplete="off"
          name="input"
          type="text"
        />
        <button className="btn" onClick={greet}>
          Greet
        </button>
        {Remote ? <Remote /> : <div>Loading...</div>}
      </div>
    </div>
  );
}

export default App;
