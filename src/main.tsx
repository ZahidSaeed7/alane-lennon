import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configure } from 'axios-hooks'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.tsx'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

configure({ axios });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
