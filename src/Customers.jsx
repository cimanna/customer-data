import React from 'react';
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import Update from './Update';
//Display list of letters of customers' first letter  as Links



export default function Customers(props) {
  const { custData } = props;
  const [visible, setVisible] = useState(false);
  const [filtered, setFiltered] = useState([]);

//   const handleClick = (e) => {
//     const letter =  e.target.innerText ;
//     const filtered = custData.filter((customer) => 
//       customer.name[0] === letter 
//     )
   
//       setFiltered(filtered)
//   setVisible(true);
// }
  

  return (
    <div>
      <nav className="alphContainer">
        <ul>
          <Link to={`/contact/${custData._id}`}>
            <li>{custData.Name}</li>
          </Link>
        </ul>
      </nav>
      <div>
        {visible ? <Update custData={filtered} /> : null}
        </div>
    </div>
  )
}