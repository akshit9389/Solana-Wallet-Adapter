import React from "react";
import {ConnectionProvider,WalletProvider,} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider,WalletDisconnectButton,WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import Airdrop from "./components/airdrop";
function App() {
  return (
    <div className="bg-violet-300 text-zinc-800 h-screen w-full p-2">
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="">
              <div className="buttons flex justify-center items-center gap-5 mt-52">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <Airdrop />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
