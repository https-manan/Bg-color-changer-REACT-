import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');

  function ChangeColor(col) {
    setColor(col);
  }

  return (
    <div className="main" style={{ backgroundColor: color }}>
      <div className="nav">
        <button style={{ backgroundColor: '#dc3545' }} onClick={() => ChangeColor('red')}>Red</button>
        <button style={{ backgroundColor: '#28a745' }} onClick={() => ChangeColor('green')}>Green</button>
        <button style={{ backgroundColor: '#007bff' }} onClick={() => ChangeColor('blue')}>Blue</button>
        <button style={{ backgroundColor: '#808000' }} onClick={() => ChangeColor('olive')}>Olive</button>
        <button style={{ backgroundColor: '#6c757d' }} onClick={() => ChangeColor('gray')}>Gray</button>
        <button style={{ backgroundColor: '#ffc107', color: '#000' }} onClick={() => ChangeColor('yellow')}>Yellow</button>
        <button style={{ backgroundColor: '#e83e8c' }} onClick={() => ChangeColor('pink')}>Pink</button>
        <button style={{ backgroundColor: '#6f42c1' }} onClick={() => ChangeColor('purple')}>Purple</button>
        <button style={{ backgroundColor: '#e6e6fa', color: '#000' }} onClick={() => ChangeColor('lavender')}>Lavender</button>
        <button style={{ backgroundColor: '#ffffff', color: '#000' }} onClick={() => ChangeColor('white')}>White</button>
        <button style={{ backgroundColor: '#000000' }} onClick={() => ChangeColor('black')}>Black</button>
      </div>
    </div>
  );
}

export default App;
