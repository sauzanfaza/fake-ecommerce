'use client';

import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import SearchBar from './SearchBar';

export default function Header() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/productDetail/cart');
    };

    return (
        <header className="w-full px-6 py-5 flex items-center gap-8">

            {/* Logo */}
            <div className="font-caslon font-semibold whitespace-nowrap">
                FAKE E-COMMERCE
            </div>

            {/* Search Bar + Filter */}
            <div className="flex-1">
                <nav className="w-full flex gap-3 items-center">
                    <div className="flex-1">
                        <SearchBar />
                    </div>

                    <button
                        className="px-5 py-3 shadow-md border rounded-md 
                        text-center cursor-pointer 
                        hover:scale-105 transition-transform duration-500"
                    >
                        Filter
                    </button>
                </nav>
            </div>

            {/* Cart */}
            <button
                onClick={handleClick}
                className="cursor-pointer group"
            >
                <FaShoppingCart
                    className="text-black group-hover:text-slate-600 
                    transition-colors duration-300 text-2xl"
                />
            </button>

        </header>
    );
}