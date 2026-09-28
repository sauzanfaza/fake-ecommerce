'use client'
import { useSearch } from "@/context/SearchContext";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
    const {setKeyword} = useSearch()

    return(
        <div className="p-4">
            <div className="relative">
                <IoIosSearch className="absolute left-3 top-5 -trasnlate-y-1/2 text-gray-500 text-xl" />
                
                <input
                type="text"
                placeholder="cari sesuatu"
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full pl-10 pr-4 py-4 rounded-lg border border-slate-400 focus:outline-none focus:ring-slate-600"/>
            </div>
        </div>
    )
}