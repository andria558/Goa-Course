import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const structure = (
  <div>
    <h1>Hello, Brian</h1>
    <h2>It's CodeAcademy ❤️</h2>
    <img src="codeAcademy.png" alt="CodeAcademy Logo" />
    <p>
      It's a programming academy website where you can learn React and more. There are completed tasks.
    </p>
    <button>
      Button 1
    </button>
    <button>
      Button 2
    </button>
    <button>
      Button 3
    </button>
  </div>
);

root.render(structure);
