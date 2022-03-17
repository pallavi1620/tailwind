import Link from 'next/link'
import '../styles/globals.css'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return(
    <div className="mx-auto">
      
      <header>
      <div> <Link href="/"><a className=" font-bold text-4xl text-center">BLOG</a></Link></div>
        </header>
<Component {...pageProps} />
</div>
  ); 
}

export default MyApp
