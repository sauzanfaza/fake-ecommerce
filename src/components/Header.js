import {FaShoppingCart} from 'react-icons/fa';


export default function Header() {
    return(
        <>
        <header className="w-full p-4 flex items-center justify-between mb-5">
            <div className="flex items-center">FAKE E-COMMERCE</div>
            <div className="flex-1"></div>
            <div className="flex items-center mr-2">
                <button className="cursor-pointer group transition-colors duration-300">
                    <FaShoppingCart className='text-black group-hover:text-slate-600 transition-colors duration-300'/>
                </button>
            </div>
        </header>
        <nav className="flex gap-4 mb-8">
            <button className="w-1/2 items-center shadow-md border rounded-md p-4 ml-6 text-center cursor-pointer hover:scale-105 transition-transform duration-500">Kategori</button>
            <button className="w-1/2 items-center shadow-md border rounded-md p-4 mr-6 text-center cursor-pointer hover:scale-105 transition-transform duration-500">Filter</button>
        </nav>
        </>
    )
}