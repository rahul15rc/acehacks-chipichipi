import './App.css';
import React, { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter an amount");
    } else {
      var options = {
        key: "rzp_test_0LicN5FdKvt6qx",
        key_secret: "RYYuOY8fRDO7RWOB61wLMMZy",
        amount: amount * 100,
        currency: "INR",
        name: "CHIPI CHIPI",
        description: "For testing purpose",
        handler: function(response) {
          // Redirect after successful payment
          window.location.href = "http://localhost:5174/user";
        },
        prefill: {
          name: "Velmurugan",
          email: "mvel1620r@gmail.com",
          contact: "7904425033"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div className="App">
      <h2>Payment Portal</h2>
      <br />
      <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
      <br /><br />
      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
}

export default App;
