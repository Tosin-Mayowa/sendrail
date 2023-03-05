import Img from '../Asset/profile-picture.png'
export const sampleRiders: {
    id: number
    name: string,
    email: string,
    date: string,
    icon: string
}[] = [
        {
            id: 1,
            name: "John Tae",
            email: "tousie@gmail.com",
            date: "23-01-2023",
            icon: Img
        },
    ]

export const tableHeadings: string[] = [
    "Name",
    "Email",
    "Contact",
    "Date",
    "View"
]

export const sampleHistory: {
    status: "Transaction Successful" | "Transaction Failed" | "Transaction Pending",
    date: string,
    amount: string
}[] = [
        {
            status: "Transaction Successful",
            date: "January 1, 8:00am",
            amount: "₦60,000.00"
        },
    ]

