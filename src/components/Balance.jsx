import React, { useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'

function Balance() {
    const [bal, setbal] = useState("")
    const { connection } = useConnection()
    const wallet = useWallet()
    async function getBalance() {
        if (wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            setbal(balance / LAMPORTS_PER_SOL);
        }
    }
    getBalance()
    return (
        <div className='flex gap-5 justify-center mt-10'>
            <h2 className='font-semibold'>Your Balance:</h2>
            <input type='text' value={bal} readOnly className='w-[23vw] px-2 border-1 border-violet-900 rounded-md' />
        </div>
    )
}

export default Balance