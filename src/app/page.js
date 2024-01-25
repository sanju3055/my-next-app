import Link from "next/link"
import ProductCard from '@/components/ProductCard';
import { getProducts } from "@/services/productServices";
import React from "react";
import ShareBtn from "@/components/ShareBtn";

//export const revalidate=30

const Page=async ()=>{
    console.log("Home page returned")
    const products= await getProducts(5)
    return(
        
        <div>
            <div className="bg-yellow-400 h-72">
               <h1 className="text-black text-center text-5xl font-bold pt-20">
                Indias Best <span className="text-gray-400">Fashion </span>Platform for <span className="text-green-500">Indians!</span>
                </h1>
            </div>
            <div className="m-3 flex flex-wrap gap-2">
               {products.data.map((item,index)=> <ProductCard key={item.id} item={item} index={index}/> )}
            </div>
            <Link href="/Products" className="inline-block text-orange-400 p-4 font-bold hover:underline">View All{">"}</Link>

        </div>
        
       
    )
}

export default Page