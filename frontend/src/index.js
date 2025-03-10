import React from 'react'; // Importing React library
import ReactDOM from 'react-dom'; // Importing ReactDOM for rendering
import App from './App'; // Importing the main App component
import './components/App.css'; // Updated import

// Rendering the App component into the root div
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
