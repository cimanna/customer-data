import React, { useState,useEffect} from 'react'

export default function Update(props) {
  const { setFormData, custData } = props;

  let changeInfo = (e) => {
    e.preventDefault()
    setFormData({value: e.target.value})
    // setFormData({ ...custData, [e.target.name]: e.target.value });
    // e.preventDefault();
    // visible: true,
    // setFormData = inputRef.current.value;
  }
  return (
    <div className="info">
      <form>
      <ul>
        //custData = prop passed into textarea value
        <li onClick={changeInfo}>Name: <textarea value={custData.name} /></li>
        <li onClick={changeInfo}>Email: <textarea value={custData.email} /></li>
        <li onClick={changeInfo}>Amount Spent: <textarea value={custData.amtSpent} /></li>
        <li onClick={changeInfo}>Card Number(s): <textarea value={custData.cardNumber} /></li>
        </ul>
        </form>
    </div>
  )
}