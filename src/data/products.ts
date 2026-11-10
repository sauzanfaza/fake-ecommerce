type Product = {
    id: number
    name: string
    price: number
    category: "Beauty" | "Elektronik" | "Style"
    image: string
    description: string
    stok: number
}

const products : Product[] = [
    {
        id: 1,
        name: "foundation",
        price: 120000,
        category: "Beauty",
        image: '/img/foundation.jpg',
        description: 'Foundation flawless dan tahan lama, full coverage.',
        stok: 100
    },
    {
        id: 2,
        name: "handphone",
        price: 15000000,
        category: "Elektronik",
        image: '/img/handphone.jpg',
        description: 'dengan teknologi AI terbaru, dan penyimpanan besar.',
        stok: 20
    },
    {
        id: 3,
        name: "kemeja",
        price: 110000,
        category: "Style",
        image: '/img/kemeja.jpg',
        description: 'kemeja lucu, adem dan anti kusut',
        stok: 200
    },
    {
        id: 4,
        name: "sepatu",
        price: 170000,
        category: "Style",
        image: '/img/sepatu.jpg',
        description: 'stylish, kekinian, dan kece',
        stok: 50
    },
    {
        id: 5,
        name: "tas",
        price: 120000,
        category: "Beauty",
        image: '/img/tas.jpg',
        description: 'tas branded, elegan dan stylish',
        stok: 100
    },
    {
        id: 6,
        name: "sepatu",
        price: 170000,
        category: "Style",
        image: '/img/sepatu.jpg',
        description: 'stylish, kekinian, dan kece',
        stok: 50
    },
    {
        id: 7,
        name: "foundation",
        price: 120000,
        category: "Beauty",
        image: '/img/foundation.jpg',
        description: 'Foundation flawless dan tahan lama, full coverage.',
        stok: 100
    },
    {
        id: 8,
        name: "kemeja",
        price: 110000,
        category: "Style",
        image: '/img/kemeja.jpg',
        description: 'kemeja lucu, adem dan anti kusut',
        stok: 200
    },
]

export default products;