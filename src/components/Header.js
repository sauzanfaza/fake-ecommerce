'use client';
import {FaShoppingCart} from 'react-icons/fa';
import { useRouter } from "next/navigation"
import SearchBar from './SearchBar';


export default function Header() {

    const router = useRouter();
    const handleClick = () => {
        router.push('/productDetail/cart');
    }
    return(
        <>
        <header className="w-full p-4 flex items-center justify-between mb-5">
            <div className="flex items-center">FAKE E-COMMERCE</div>
            <div className="flex-1"></div>
            <div className="flex items-center mr-2">
                <button 
                onClick={handleClick}
                className="cursor-pointer group transition-colors duration-300">
                    <FaShoppingCart className='text-black group-hover:text-slate-600 transition-colors duration-300'/>
                </button>
            </div>
        </header>
        <nav className="w-full flex gap-2 mb-8">
            <div className='flex-1'>
            <SearchBar />
            </div>
            <button className="w-32 items-center shadow-md border rounded-md p-4 mr-6 text-center cursor-pointer hover:scale-105 transition-transform duration-500">Filter</button>
        </nav>
        </>
    )
}