type xtras = {
    name: string,
    price: number
}
export const foodMenuSample: {
    id: number,
    foodCombo: string,
    pricePerPlate: number,
    xtraPortion1?: xtras,
    xtraPortion2?: xtras,
    xtraPortion3?: xtras,
}[] = [
        {
            id: 1,
            foodCombo: 'Spaghetti, chicken and fried plantain',
            pricePerPlate: 1500,
            xtraPortion1: {
                name: "Chicken",
                price: 500,
            },
            xtraPortion2: {
                name: "Plantain",
                price: 500,
            },
            xtraPortion3: {
                name: "Spaghetti",
                price: 500,
            },
        },
        {
            id: 2,
            foodCombo: 'Spaghetti, chicken and fried plantain',
            pricePerPlate: 1500,
            xtraPortion1: {
                name: "Chicken",
                price: 500,
            },
        },
    ]

export const groceryTableHeading: string[] = [
    "No",
    "Image",
    "Product",
    "Product Code",
    "Size",
    "Category",
    "Brand",
    "Consumer",
    "Flavor",
    "Price",
    "Action"
]

export const groceryTableData: any = [
    {
        id: 1,
        product: "Noodles",
        code: 125334,
        size: "120 X 20pcs",
        category: "Food",
        brand: "Indomie",
        consumer: "All",
        Flavor: "Onions Chicken",
        price: 10999,
    }
]