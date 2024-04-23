import { db } from '@/lib/db'
import React from 'react'
import ProductList from './ProductList'

export default async function page() {
  const data = await db.product.findMany()

  console.log(data, 'testing')
  console.log( 'testing')
    

  return (
    <>
    {data.map(p => {
      return(
        <ProductList product={p} key={p.id}/>
      )
    })}
    test
    </>
  )
}
