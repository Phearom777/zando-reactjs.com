import React from 'react';

function App(props) {
  return (
    <div>
      <h1>HomeScrean</h1>
      <div className="formStaff">
        <div className="txMain">Staff Form</div>
      
        <input className="input" placeholder='fname'></input>
        <input className="input" placeholder='lname'></input>
        <input className="input" placeholder='gender'></input>
        <input className="input" placeholder='salary'></input>
        <button className="btnAdd">Add</button>
      
      </div>
    </div>
  );
}

export default App;