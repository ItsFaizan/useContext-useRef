import React, { useState, useEffect, useRef} from 'react';
const SecondComponent = () => {

   const [input, setInput] = useState('');
   const previousinput = useRef('');

   useEffect(()=>{
      previousinput.current = input;

   },[input]);
return (
   <div>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <h1>Current Value: {input}</h1>
      <h1>Previous Value: {previousinput.current}</h1>
   </div>
);
};

export default SecondComponent;