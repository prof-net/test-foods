import React from 'react';
import Header from "./layout/header/Header";
import Body from "./layout/body/Body";
import Footer from "./layout/footer/Footer";
import modules from './App.module.scss';


function App() {
  return (
    <div className={modules.app}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
