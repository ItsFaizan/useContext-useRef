import React, { useState, useContext, createContext } from 'react';
const userContext = createContext();

export default function FirstComponent() {
      const [name, setName] = useState('Faizan Javed');

    return (
      <div>
            <userContext.Provider value={name}>
            <h1>{`Hi ${name}!`}</h1>
            <ComponentA/>
             </userContext.Provider>

      </div>
    );
  }

  function ComponentA() {
      return (
         <div>
            <h1>ComponentA</h1>
         <ComponentB/>
         </div>
      );
   }

   function ComponentB() {
      return (
         <div>
            <h1>ComponentB</h1>
         <ComponentC/>
         </div>
      );
   }

   function ComponentC() {
      const user = useContext(userContext);
      return (
         <div>
            <h1>ComponentC</h1>
            <h1>{`Hi ${user} again!`}</h1>
         </div>
      );
   }
