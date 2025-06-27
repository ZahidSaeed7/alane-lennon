import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configure } from 'axios-hooks'
import Axios from 'axios';
import { LRUCache } from 'lru-cache';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './common/store/store';

configure({
  axios: Axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
  }),
  cache: new LRUCache({ max: 10 })
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
