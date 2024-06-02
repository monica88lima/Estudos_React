import React from 'react'

function ShowMessage({myfunction}) {
  return (
    <div>
        <button onClick={myfunction}> Clique para ver a Mensagem</button>
    </div>
  );
};

export default ShowMessage;