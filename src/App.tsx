import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import Header from './pagesElements/Header.tsx';
import Footer from './pagesElements/Footer.tsx';
import Content from './pagesElements/Content.tsx';

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
