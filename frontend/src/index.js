import React from 'react';
import ReactDOM from 'react-dom/client';

import * as Popover from "@radix-ui/react-popover";
import {BrowserRouter} from "react-router-dom";

import './stylesheets/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Popover.Root>
              <App />
          </Popover.Root>
      </BrowserRouter>
  </React.StrictMode>
);
