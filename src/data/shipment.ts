export const tableHeadings: string[] = [
    "Destination",
    "Rider",
    "Order status",
    "Date",
    "Departure",
    "Arrival",
    "Delivery status",
    "Time delay"
]

export type TData = {
    destination: string,
    rider?: string | null,
    order_status: string,
    date: string,
    departure: string,
    arrival: string,
    delivery_status: string,
    time_delay?: string | null,
}[]
export const tableData: TData = [
    {
        destination: "Ikeja-Ikorodu",
        rider: "John Tae",
        order_status: "Assigned",
        date: "12-20-2022",
        departure: "12:00pm",
        arrival: "2:00pm",
        delivery_status: "In transit",
        time_delay: "01:00 hr",
    },
    {
        destination: "Ikeja-Ikorodu",
        rider: "John Tae",
        order_status: "Unassigned",
        date: "12-20-2022",
        departure: "12:00pm",
        arrival: "2:00pm",
        delivery_status: "Canceled",
    },
    {
        destination: "Ikeja-Ikorodu",
        rider: "John Tae",
        order_status: "Unassigned",
        date: "12-20-2022",
        departure: "12:00pm",
        arrival: "2:00pm",
        delivery_status: "Pending",
        time_delay: "01:00 hr",
    },
    {
        destination: "Ikeja-Ikorodu",
        rider: "John Tae",
        order_status: "Assigned",
        date: "12-20-2022",
        departure: "12:00pm",
        arrival: "2:00pm",
        delivery_status: "Delivered",
        time_delay: "01:00 hr",
    }
] 