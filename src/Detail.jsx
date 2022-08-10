import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const [customer, setCustomer] = useState({})
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://customerdataapi.herokuapp.com/api/customers/${id}`)
      .then(response => response.json())
      .then(customer => {
        setCustomer(customer);
      })
  }, [id])
  
  return (
    <div>
      <h1>Detail page</h1>
      <h2>{customer.Name}</h2>
      <h3>{customer.Email}</h3>
      <h4>{customer.AmountSpent}</h4>
      <h5>{customer.Cards}</h5>
    </div>
  )
}