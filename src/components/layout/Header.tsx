import Link from "next/link"
import Logo from "/public/Logo.webp"
import Image from 'next/image'
import {ShoppingCart} from "lucide-react"

const Header = () => {
  return (
    <div className="flex justify-between items-center  px-8 py-6">
      <Image src={Logo} alt="" />
      <ul className="flex gap-x-10">
        <li className="text-lg"><Link href={"category/Female "}>Female </Link></li>
        <li className="text-lg"><Link href={"category/Male "}>Male </Link></li>
        <li className="text-lg"><Link href={"category/Kids "}>Kids </Link></li>
        <li className="text-lg"><Link href={"/products "}>All Product </Link></li>
        </ul>

        <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center" >
          <ShoppingCart className="h-6 w-6"/>


        </div>


    
    </div>
  )
}

export default Header
