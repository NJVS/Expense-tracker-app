import { useState } from 'react'

const AddTransaction = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="inp_transactionTitle">Title</label>
          <input type="text" id="inp_transactionTitle" placeholder='Enter transaction title here...'
            value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="inp_transactionAmount">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="inp_transactionAmount" placeholder='Enter transaction amount here...'
            value={amount} onChange={(event) => setAmount(event.target.value)} />
        </div>
        <button type='submit' className='btn'>Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaction