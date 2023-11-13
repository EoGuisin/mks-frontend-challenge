export interface Products {
    products: Product[],
    count: number,
}

export interface Product {
    id: number,
    name: string,
    brand: string,
    description: string,
    photo: string,
    price: number,
    createdAt: string,
    updatedAt: string,
    quantity: number,
}