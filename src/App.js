import './App.css';
import candidates from './candidates.png'; // with import


function App() {
  return (
    <div>
      <h1>Matt's voting guide</h1>
      <p>As seen on my fridge</p>
        <img style={{width: '100%', height: 'auto',maxWidth:'400px'}} src={candidates} alt='where am i'/>
    </div>
  );
}

export default App;
