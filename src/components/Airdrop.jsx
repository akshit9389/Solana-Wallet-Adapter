import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React, { useState } from 'react'

function Airdrop() {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [amount, setAmount] = useState('');
    async function airdroppped() {
        const amnt = parseFloat(amount)
        if (isNaN(amnt) || amnt <= 0) {
          alert("❌ Enter a valid amount in SOL!");
          return;
        }
         await connection.requestAirdrop(wallet.publicKey, amnt * 1000000000)
         alert("airdrop request completed")
    }
  return (
    <div className='mt-10 pb-2 flex justify-center items-center border-b-1 w-[80vw] border-b-violet-400 '>
        <input id='amt' value={amount} onChange={(e) => setAmount(e.target.value)} type='text' placeholder='Amount you want to airdrop' className='border-violet-900 border-1 rounded-md mx-5 w-[20vw] px-2 '/>
        <button onClick={airdroppped} className='px-5 py-1 text-zinc-100 bg-violet-800 rounded-md cursor-pointer'>Send Airdrop</button>
    </div>
  )
}

export default Airdrop