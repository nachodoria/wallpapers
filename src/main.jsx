import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailed from './Detailed';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
              <Route exact path="/" element={<App />} />

              <Route exact path="/detail" element={<Detailed />}/>

            </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
