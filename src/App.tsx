import React from 'react';

function App() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      color: 'white',
      background: 'linear-gradient(135deg, #0a2a3b, #1a5a7a)',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#9d4edd' }}>🌙 Dark Moon Magic Potions</h1>
      <p style={{ fontSize: '18px' }}>React работает! 🎉</p>
      <p>URL: {window.location.href}</p>
    </div>
  );
}

export default App;
