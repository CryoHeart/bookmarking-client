import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';

function App() {

  const dispatch = useDispatch();

  if (sessionStorage.getItem("token")) {
    sessionStorage.getItem("token");
  }

  return (
    <div className="app">

      <Layout />

    </div>
  )

}

export default App;
