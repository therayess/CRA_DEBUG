import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => {
  const [count, setCount] = useState(0);
  return <div>Test App</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
