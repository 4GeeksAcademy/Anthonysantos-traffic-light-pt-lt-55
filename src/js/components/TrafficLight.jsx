import React, { useState } from 'react';
import '/src/styles/index.css';

const TrafficLight = () => {
  const [red, setRed] = useState('red');
  const [yellow, setYellow] = useState('yellow');
  const [green, setGreen] = useState('green');
  const [redBright, setRedBright] = useState(false);
  const [yellowBright, setYellowBright] = useState(false);

  function changeRed() {
    setRedBright(true);
  }
  function changeYellow() {
    setYellowBright(true);
  }


  return (
    <div className="d-flex flex-column align-items-center">
      <div onClick={changeRed} className={redBright ? 'bright' : ''} style={{backgroundColor: red, width: '100px', height: '100px', borderRadius: '50%', border: 'none', marginBottom: '20px'}}>
      </div>
      
       <div onClick={changeYellow} className={yellowBright ? 'brightYellow' : ''} style={{backgroundColor: yellow, width: '100px', height: '100px', borderRadius: '50%', border: 'none', marginBottom: '20px'}}>
      </div>  

    </div>
  );
};

export default TrafficLight;
