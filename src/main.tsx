import ReactDOM from 'react-dom/client';
import './index.css';  // Import global CSS styles if any
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);