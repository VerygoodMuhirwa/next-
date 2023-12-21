"use client"
import Link from 'next/link'
import ProductCard from './components/Products/ProductCard'

export default function Home() {
  return (
    <main >
      <h1>Hello world</h1>
      <Link href="/users">Users</Link>
      <button className='btn btn-primary' onClick={()=>console.log("Button clicked succesfully")
      }>Add to Cart</button>
      <ProductCard />
  </main>
  )
}
