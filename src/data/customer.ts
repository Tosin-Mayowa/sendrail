import Img from '../Asset/profile-picture.png'
export const customers: {
    id: number
    name: string,
    location: string,
    type: "Individual" | "Business",
    icon: string
}[] = [
        {
            id: 1,
            name: "Ebenezer James",
            location: "Lagos Nigeria",
            type: "Individual",
            icon: Img
        },
        {
            id: 2,
            name: "Ebenezer James",
            location: "Lagos Nigeria",
            type: "Business",
            icon: Img
        },
    ]

export const tableHeadings: string[] = [
    "Name",
    "Location",
    "Type",
    "Create order",
    " "
]

