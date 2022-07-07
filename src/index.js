import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const curRoot = document.querySelector('#root');
const root = createRoot(curRoot)
root.render(<App />);