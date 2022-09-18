//Circular Merch - ETHB3rlin
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Link from 'next/link'


let rpcEndpoint = null

if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
  rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL
}

export default function Redirect() {
    return(
        <div>
            <h1>Your merch has been listed !</h1>
            <Link href="/">
            <a className="mr-4 text-pink-500">
              Go back to home page
            </a>
          </Link>
          <div className='imgcenter'>
          <img
              src="/anonymerch_logo.png"
              width="600"
              height="240"
              className="d-inline-block align-top"
              alt="Circle Merch logo"
            />
          </div>
          
        </div>


    )
}
