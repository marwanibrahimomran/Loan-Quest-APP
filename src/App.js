import { useState } from 'react';
import './App.css';

function App() {
  const nosalary = "Select Salary";
  

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [check, setCheck] = useState(false);
  const [salary, setSalary] = useState(nosalary);
  const [popup, setPopup] = useState({ show: false, message: "", success: false });

  function showPopup(message, success = false) {
    
    setPopup({ show: true, message, success })
    ;
  }

  function closePopup() {
    setPopup({ show: false, message: "", success: false });
  }

  function handleSubmit() {
    if (name.trim() === "")
      return showPopup("Enter your name!");

    if (phone.length < 10 || phone.length > 15)
      return showPopup("Enter a valid phone number!");

    if (age < 18 || age > 80)
      return showPopup("Age not allowed!");

    if (check === false)
      return showPopup("Success! Your loan request has been sent ✅");

    if (check === true && salary === "Select Salary")
      return showPopup("Select your salary!");

    showPopup("   Your loan request has been sent Successfully! ✅  ", true);
  }

  return (
    <div className="App">
      <div className='form'>

        <h2> Loan request for <span>HSBC</span> bank</h2>

        <input
          type='text'
          placeholder='Enter Your Name'
          onChange={(e) => setName(e.target.value)}
        /><br/>

        <input
          type='text'
          placeholder='Enter Your Phone Number'
          onChange={(e) => setPhone(e.target.value)}
        /><br/>

        <input
          type='number'
          placeholder='Enter Your Age'
          onChange={(e) => setAge(e.target.value)}
        /><br/>

        <div className='check'>
          <input
            type='checkbox'
            onChange={() => setCheck(prev => !prev)}
          />
          <label>Are you an employee?</label>
        </div>

        <select onChange={(e) => setSalary(e.target.value)}>
          <option>Select Salary</option>
          <option>Less than 15,000k</option>
          <option>15,000 to 35,000k</option>
          <option>More than 35,000k</option>
        </select><br/>

        <button onClick={handleSubmit}>Submit</button>

      </div>

      {popup.show && (
        <div className='overlay' onClick={closePopup}>
          <div className='popup' onClick={(e) => e.stopPropagation()}>
            <p>{popup.message}</p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}

    
      

    </div>
    
  );
}

export default App;
