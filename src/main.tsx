import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';

import App from './app/app';
import styled from 'styled-components';
import "src/index.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
      <App />
  </StrictMode>
);
