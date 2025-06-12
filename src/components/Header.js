export default function Header() {
    return(
        <>
        <header className="w-full p-4 flex items-center justify-between mb-5">
            <div className="flex items-center">FAKE E-COMMERCE</div>
            <div className="flex-1"></div>
            <div className="flex items-center">
                <button>keranjang</button>
            </div>
        </header>
        <nav className="flex gap-4 mb-8">
            <button className="w-1/2 items-center shadow-md border rounded-md p-4 ml-6 text-center">Kategori</button>
            <button className="w-1/2 items-center shadow-md border rounded-md p-4 mr-6 text-center">Filter</button>
        </nav>
        </>
    )
}