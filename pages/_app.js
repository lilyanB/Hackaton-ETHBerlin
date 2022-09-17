import '../styles/globals.css'
import Link from 'next/link'

function Marketplace({ Component, pageProps }) {
  return (
    <div className='fronti'>
    <div className='englobe'>
      <div className='logocenter'>
      <img
                src="/anonymerch_logo.png"
                width="400"
                height="180"
                className="d-inline-block align-top align-center"
                alt="Circle Merch logo"
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
        </div>
      </nav>
      </div>
      <Component {...pageProps} />
      <br></br>
      <footer className='footer1'>Circle Merch - ETHB3RLIN 2022 👚👔👕👖</footer>
    </div>
    
  )
}
export default Marketplace
