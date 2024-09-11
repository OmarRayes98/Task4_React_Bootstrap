import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import "./assets/styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';


createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
