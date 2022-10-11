import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home, Contact, About, News } from './pages'
import './assets/styles.scss'
import './index.css';
const container =   document.getElementById('root');
const root = createRoot(container);
root.render(
         <BrowserRouter>
            <Routes>
              <Route index element={<App/>} />
              <Route path='/' element={<Home/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/news' element={<News/>} />
              <Route path='/about' element={<About/>} />
            </Routes>
         </BrowserRouter>  
  );
