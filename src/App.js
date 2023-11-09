import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Events from './Components/Events/Events';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Dwg from './Components/Events/Dwg';
import Figure from './Components/Events/Figure';
import Fine from './Components/Events/Fine';
import Flix from './Components/Events/Flix';
import Quest from './Components/Events/Quest';
import Sortium from './Components/Events/Sortium';
import Strain from './Components/Events/Strain';
import Test from './Components/Events/Test';
import Voke from './Components/Events/Voke';
import X from './Components/Events/X';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/events' Component={Events} />
        <Route path='/events/dwg' Component={Dwg} />
        <Route path='/events/figure' Component={Figure} />
        <Route path='/events/fine' Component={Fine} />
        <Route path='/events/flix' Component={Flix} />
        <Route path='/events/quest' Component={Quest} />
        <Route path='/events/sortium' Component={Sortium} />
        <Route path='/events/strain' Component={Strain} />
        <Route path='/events/test' Component={Test} />
        <Route path='/events/voke' Component={Voke} />
        <Route path='/events/x' Component={X} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
