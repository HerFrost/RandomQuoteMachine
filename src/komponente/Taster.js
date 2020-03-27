import React from 'react';


const Taster = ({tasterPrikaziIme, clickHandler}) => (
<button onClick={clickHandler} className="ui black basic button">{tasterPrikaziIme}</button>
);
export default Taster;