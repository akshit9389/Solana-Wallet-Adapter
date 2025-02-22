import React, { useEffect, useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'

function Balance() {
    const [bal, setbal] = useState("")
    const { connection } = useConnection()
    const wallet = useWallet()
   useEffect(() => {
     if (!wallet.publicKey) {
       setbal(""); // Clear balance if wallet is disconnected
       return;
     }

     async function fetchBalance() {
       try {
         const balance = await connection.getBalance(wallet.publicKey);
         setbal(balance / LAMPORTS_PER_SOL);
       } catch (error) {
         console.error("Failed to fetch balance:", error);
       }
     }

     fetchBalance();

     // Subscribe to balance changes (real-time updates)
     const subscriptionId = connection.onAccountChange(
       wallet.publicKey,
       async (updatedAccountInfo) => {
         setbal(updatedAccountInfo.lamports / LAMPORTS_PER_SOL);
       }
     );

     return () => {
       connection.removeAccountChangeListener(subscriptionId);
     };
   }, [wallet.publicKey, connection]);
    return (
        <div className='flex gap-5 justify-center mt-10 border-b-1 w-[80vw] border-b-violet-400 pb-2'>
            <h2 className='font-semibold'>Your Balance:</h2>
            <input type='text' value={bal} readOnly className='w-[23vw] px-2 border-1 border-violet-900 rounded-md' />
        </div>
    )
}

export default Balance