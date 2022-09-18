//Circular Merch - ETHB3rlin
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Link from 'next/link'


let rpcEndpoint = null

if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
  rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL
}

export default function ZK_Badge() {
    return(
        <div className="flex justify-center">
            <div className="px-4" style={{ maxWidth: '1600px' }}>
                <p className='main1'>
                    <img
                    src="/logo.png"
                    width="150"
                    height="60"
                    alt="Circle Merch logo"
                    className='spimg'
                    />
                Mint your ZK badge with <b><a href="https://www.sismo.io/">Sismo</a></b>, to prove your reputation on our platform!
                </p>

                <div className='flex flex-row content-center space-x-4'>
                    <a href="https://www.sismo.io/">
                        <img
                            src="/100lensfollow.png"
                            width="400"
                            height="250"
                            alt="ZK-Badge Sismo"
                            className='zkimage'
                            />
                    </a>
                    <a href="https://www.sismo.io/">
                    <img
                        src="/1000lensfollowers.png"
                        width="400"
                        height="250"
                        alt="ZK-Badge Sismo"
                        className='zkimage'
                        />
                    </a>
                    
                    <a href="https://www.sismo.io/">
                    <img
                        src="/circularmerchlens.png"
                        width="400"
                        height="250"
                        alt="ZK-Badge Sismo"
                        className='zkimage'
                        />
                    </a>
                </div>

            </div>
        </div>


    )
}
