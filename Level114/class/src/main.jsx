import React from 'react'
import App from './components/App'
import { createRoot } from 'react-dom/client'

const content = document.querySelector('#root');
const root = createRoot(content);

root.render(<App />);