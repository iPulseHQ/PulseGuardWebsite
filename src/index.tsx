import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// FontAwesome configuration
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faTimes,
  faHome,
  faStar,
  faDesktop,
  faTag,
  faUsers,
  faUserPlus,
  faFlask,
  faGlobe,
  faChevronDown,
  faArrowRight,
  faBars,
  faPlay,
  faExpand,
  faCheckCircle,
  faExclamationCircle,
  faSpinner,
  faChevronRight,
  faCreditCard,
  faEnvelope,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(
  faCheck,
  faTimes,
  faHome,
  faStar,
  faDesktop,
  faTag,
  faUsers,
  faUserPlus,
  faFlask,
  faGlobe,
  faChevronDown,
  faArrowRight,
  faBars,
  faPlay,
  faExpand,
  faCheckCircle,
  faExclamationCircle,
  faSpinner,
  faChevronRight,
  faCreditCard,
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
  faTelegram,
  faEnvelope,
  faSun,
  faMoon
);

// Create root and render app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
