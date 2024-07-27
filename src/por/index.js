import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
// import App from './remember/App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './context/App';
// import SecondApp from './context/second/SecondApp';
// import ThirdApp from './context/third/ThirdApp';
// import TaskProvider from './usereducer/App';

import App from './remember/App'
// import Messenger from './exercise/MyApp';
// import App from './newPro/MainApp'

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
