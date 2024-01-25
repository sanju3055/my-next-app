'use client'

import toast,{Toaster} from "react-hot-toast";

import { LinkIcon } from "@heroicons/react/24/outline";

const ShareBtn=()=>{
  const handleShare=()=>{
    navigator.clipboard.writeText(window.location.href)
    toast.success('copied')
  }
    return(
         <>
          <button className="text-orange-400   inline block font-bold hover:text-red-600"
          onClick={handleShare}
          >
            <LinkIcon className=" inline block w-5 h-5 "/>
            Share Link
          </button>
           <Toaster/>
            </>
        )
}

export default ShareBtn