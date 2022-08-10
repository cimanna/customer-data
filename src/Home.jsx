import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Customers from './Customers';

export default function Home() {
  const [customers, setCustomers] = useState([]);
  const [toggle, setToggle] = useState(false);

  const [formData, setFormData] = useState({
    "Name": "",
    "Email": "",
    "AmountSpent": 0,
    "Cards": []
  })

  useEffect(() => {
    fetch('https://customerdataapi.herokuapp.com/api/customers')
      .then(response => response.json())
      .then(customers => {
        setCustomers(customers);
      })
  }, [toggle])
 
  let handleCustSubmit = async (e) => {
    e.preventDefault();
    
    await axios.post('https://customerdataapi.herokuapp.com/api/customers', formData)
    setToggle(prev => !prev)
  }


  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  return (
    <div>
      <header>Company Customer Data</header>
      {/* <div className="customerInfo"> */}
        
      <form onSubmit={handleCustSubmit}>
        <input
          type="text"
          placeholder="Add Your Name"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          />
        <input
          type="text"
          placeholder="Add Your Email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          />
        <input
          type="number"
          placeholder="Add Your Spend Amount"
          name="AmountSpent"
          value={formData.AmountSpent}
          onChange={handleChange}
          />
        <button type="submit">Submit</button>
      </form>
          {customers.length && customers.map((customer, i) => {
            // console.log(customer.Name)
            // let custData = {
            //   letter: customer.Name[0].toUpperCase(),
            //     name: customer.Name,
            //     email: customer.Email,
            //     amtSpent: customer.AmountSpent,
            //     cards: customer.Cards
            //   }
            return <Customers key={i} custData={customer}/>;
    
          })}
    </div>
  )
}