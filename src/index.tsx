import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // TODO: Strict Mode und doppeltes Rendering: Der Strict Mode führt einige Operationen doppelt aus, um Nebeneffekte (wie unbeabsichtigte Zustandsmutationen) zu erkennen. Dazu gehört auch das doppelte Aufrufen von useEffect-Cleanup-Funktionen und Initialisierungen in der Entwicklungsumgebung, was jedoch nicht in der Produktionsumgebung geschieht.
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals