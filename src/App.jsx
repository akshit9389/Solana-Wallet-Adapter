import React from "react";
import {ConnectionProvider,WalletProvider,} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider,WalletDisconnectButton,WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import Airdrop from "./components/airdrop";
import Balance from "./components/Balance";
import Send from "./components/send";
function App() {
  return (
    <div className="bg-violet-300 flex-col justify-center items-center flex text-zinc-800 h-screen w-full p-2">
      <h1 className="text-5xl text-white py-2 bg-violet-800 font-bold w-[50vw] text-center rounded-md">Hello Solana</h1>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="">
              <div className="buttons flex justify-center items-center gap-5 mt-10">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <Airdrop />
              <Balance />
              <Send />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
