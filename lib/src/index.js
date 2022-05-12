import React from 'react';
import ReactDOM from 'react-dom/client';

import Button from './components/button/Button'
import H1 from './components/h1/H1'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Button>Button Primary</Button>
      <H1>Heading 1</H1>
    </>
  </React.StrictMode>
);