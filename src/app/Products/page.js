import ProductCard from "@/components/ProductCard"
import { getProducts } from "@/services/productServices"
import React from "react"

//export const revalidate=30

const Product=async()=>{
  console.log("All product returned")

  const products = await getProducts()
    return(
        <div className="m-4 mx-12 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.data.map(item=> <ProductCard key={item.id}item={item} />)}
            
        </div>
    )
}
export default Product