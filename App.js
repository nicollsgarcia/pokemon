import React, { useState } from 'react';

function App(props) {
  const [ pesquisa, setPesquisa ] = useState('');
  return (
    <>
    <input className="pesquisaInput" placeholder="pesquisa" value={pesquisa} onChange={e => setPesquisa(e.target.value)} />;
    <button type="button">Pesquisar</button>
    </>
  );
}

export default App;
