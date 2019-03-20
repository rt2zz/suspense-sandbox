import React, { Component, Suspense } from 'react';
import './App.css';

import FooList from './components/FooListSimple.naive.component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Suspense fallback={<div>loading...</div>}>
            <FooList key="a"/>
            {/* <FooList key="b"/> */}
          </Suspense>
        </header>
      </div>
    );
  }
}

export default App;
