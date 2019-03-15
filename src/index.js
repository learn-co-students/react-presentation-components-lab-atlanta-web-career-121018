import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

let doSomething= (e) => {
    console.log(e.target)
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={doSomething} />
  </div>,
  document.getElementById('root')
);
