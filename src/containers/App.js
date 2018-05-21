import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About' 
import Todo from './Todo' 

const App = () => (  
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link> 
      <Link to="/todo">Todo</Link> 
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/todo" component={Todo} />
    </main>
  </div>
)

export default App