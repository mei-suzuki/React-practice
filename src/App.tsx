import React from 'react';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import NewsList from './components/NewsList';

function App() {
  return (
    <div className="App">
        <Header />
        <MainVisual />
        <NewsList />
    </div>
  );
}

export default App;
