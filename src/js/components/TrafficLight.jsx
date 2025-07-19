import React, { useState } from 'react';
import '/src/styles/index.css';

const TrafficLight = () => {
  const [red, setRed] = useState('red');
  const [yellow, setYellow] = useState('yellow');
  const [green, setGreen] = useState('green');
  
  const [redBright, setRedBright] = useState(false);
  const [yellowBright, setYellowBright] = useState(false);
  const [greenBright, setGreenBright] = useState(false);

  function changeRed() {
    setRedBright(true);
    setYellowBright(false);
    setGreenBright(false);
  }
  function changeYellow() {
    setYellowBright(true);
    setGreenBright(false);
    setRedBright(false);
  }
  function changeGreen() {
    setGreenBright(true);
    setRedBright(false);
    setYellowBright(false);

  }
  return (
    
    <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="position-absolute top-0 bg-black rounded" style={{ width: '20px', height: '20%' }}> </div>
        <div className="d-flex flex-column align-items-center justify-content-center bg-black p-4" style={{ width: '15%' }}>
          <div onClick={changeRed} className={redBright ? 'bright' : ''} style={{backgroundColor: red, width: '100px', height: '100px', borderRadius: '50%', border: 'none', marginBottom: '20px',marginTop:'10px'}}>
          </div>
        
        <div onClick={changeYellow} className={yellowBright ? 'brightYellow' : ''} style={{backgroundColor: yellow, width: '100px', height: '100px', borderRadius: '50%', border: 'none', marginBottom: '20px'}}>
        </div> 

        <div onClick={changeGreen} className={greenBright ? 'brightGreen' : ''} style={{backgroundColor: green, width: '100px', height: '100px', borderRadius: '50%', border: 'none', marginBottom: '20px'}}>
        </div>  
    </div>
    
    </div>
    
  );
};

export default TrafficLight;
