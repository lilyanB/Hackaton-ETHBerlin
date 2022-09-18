//Circular Merch - ETHB3rlin
import '../styles/globals.css'
import Link from 'next/link'
import { useState } from 'react';
import { ethers } from 'ethers';


function Marketplace({ Component, pageProps }) {

  // Properties

  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    console.log('Requesting account...');

    // ❌ Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }


  return (
    
    <div className='fronti'>
    <div className='metabox'>
        <button onClick={requestAccount} className="metabtn" >Connect Account</button>
        <h3 className='wlinfo'>{walletAddress}</h3>
    </div>
    <div className='englobe'>
      <div className='logocenter'>
      <img
                src="/anonymerch_logo.png"
                width="400"
                height="180"
                className="d-inline-block align-top align-center"
                alt="Circular Merch logo"
              />
        </div>
        
      <nav className="navbar">
        
        <div className="flex mt-4 font-medium">
          <Link href="/">
            <a className="mr-4 text-blue-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-purple-500">
              Sell Merch
            </a>
          </Link>
          <Link href="/my-merch">
            <a className="mr-6 text-blue-500">
              My Merch
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-purple-500">
              Dashboard
            </a>
          </Link>
          <Link href="/zk-badge">
            <a className="mr-6 text-purple-500">
              ZK-Badges
            </a>
          </Link>
        </div>
      </nav>
      </div>
      <Component {...pageProps} />
      <br></br>
      <footer className='footer1'>Circular Merch - ETHB3RLIN 2022 👚👔👕👖</footer>
    </div>
    
  )
}
export default Marketplace
