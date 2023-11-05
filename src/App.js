import React from 'react';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Knowledge from './pages/Knowledge';
import Gallery from './pages/Gallery'


function App() {
  return (
    <> 
		<Header/>
		<Routes>
			<Route exact path="/Garden" element={<Home/>}/>
			<Route path="/home" element={<Home/>}/>
			<Route path="/knowledge" element={<Knowledge/>}/>
			<Route path="/gallery" element={<Gallery/>}/>
		</Routes>
    </>
  );
}

export default App;
