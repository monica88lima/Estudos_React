import React from 'react'
import { Children } from 'react';

function Container({children}) {
  return (
    <div>
        <h1>Titulo para teste</h1>
        {children}
    </div>
    
  );
};

export default Container;