import React from 'react'

const Transaction = ({ data }) => {

  const toCurrency = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
  })

  return (
    <li className={data.amount < 0 ? 'minus' : 'plus'}>
      {data.title} <span>{toCurrency.format(data.amount)}</span><button className='delete-btn'>x</button>
    </li>
  )
}

export default Transaction