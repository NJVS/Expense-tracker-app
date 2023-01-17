import React from 'react'

const Transaction = ({ data }) => {
  const sign = data.amount < 0 ? '-' : '+';

  return (
    <li className={sign === '-' ? 'minus' : 'plus'}>
      {data.title} <span>{sign}${Math.abs(data.amount)}</span><button className='delete-btn'>x</button>
    </li>
  )
}

export default Transaction