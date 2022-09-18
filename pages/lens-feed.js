//Circular Merch - ETHB3rlin
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Link from 'next/link'


let rpcEndpoint = null

if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
  rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL
}

// it's a feature, we don't had the time to integrate a Lens feed but our main goal is to enable 
// a Lens login with a profile and display automaticaly a feed with the latest posted items.

export default function Lens_feed() {
    return(
        <div className="flex justify-center">
            <div className="px-4" style={{ maxWidth: '1600px' }}>
                <p className='main1'>
                    
                <b>FEATURE</b> : Find all the latest items listed with <b><a href="https://lens.xyz/">Lens</a></b> and discussed directly with the seller!
                </p>

                <div className='divcenter'>
                    <a href="https://lens.xyz/">
                        <img
                            src="/lenslogo.png"
                            width="300"
                            height="200"
                            alt="Lens logo"
                            className='zkimage'
                            />
                    </a>
                </div>

            </div>
        </div>


    )
}
