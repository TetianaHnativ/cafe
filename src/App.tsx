import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Content from './components/Content.tsx';

import store from './store/store.ts';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
