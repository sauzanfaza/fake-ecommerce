'use client'
import { createContext, ReactNode, useContext, useState } from "react"

type SearchContextType = {
    keyword: string
    setKeyword: (value: string) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children } : { children: ReactNode}) {
    const [keyword, setKeyword] = useState('')
    return(
        <SearchContext.Provider value={{keyword, setKeyword}}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch() {
    const context = useContext(SearchContext)
    if(!context) throw new Error ("useSearch harus di pakai di dalam SearchProvider")
    return context
}