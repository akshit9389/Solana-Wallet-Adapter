import React, { useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js'
function Send() {
    const { connection } = useConnection()
    const wallet = useWallet()
    const [pubKey, setPubKey] = useState("")
    const [amt, setamt] = useState("")
    async function sendTran() {
    const transaction = new Transaction
    transaction.add(
        SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(pubKey),
            lamports: Math.floor(parseFloat(amt) * LAMPORTS_PER_SOL)
        }) 
    )
    await wallet.sendTransaction(transaction, connection)
     alert("Sent " + amt + " SOL to " + pubKey);
    }

  return (
    <div className='mt-10 gap-5 flex flex-col justify-center items-center '>
        <h3 className='text-2xl text-white font-bold bg-violet-800 px-22 py-1 rounded-md'>Send a Transaction</h3>
        <div>
            <div>
                <input type="text" value={pubKey} onChange={(e) => setPubKey(e.target.value)} className='border-1 border-violet-900 rounded-md w-[32vw] h-[5vh] px-2 ' placeholder='Enter the public key' />
            </div>
            <div className='pt-2 flex gap-7'>
                <input type="text" value={amt} onChange={(e) => setamt(e.target.value)} className='border-1 border-violet-900 rounded-md w-[23vw] h-[5vh] px-2 ' placeholder='Enter the amount' />
                <button onClick={sendTran} className='px-8 py-1 text-zinc-100 bg-violet-800 rounded-md cursor-pointer'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Send