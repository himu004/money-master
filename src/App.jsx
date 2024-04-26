
import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {

  const [amount, setAmount] = useState(0);

  const [from, setFrom] = useState("usd")

  const [to, setTo] = useState("bdt");

  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  

  return (
    <>
      <h1 className='text-center text-yellow-500 bg-green-600'>Currency App</h1>
     <InputBox/>
    </>
  )
}

export default App
