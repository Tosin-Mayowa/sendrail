export const tableHeadings: string[] = [
    "Destination",
    "Courier name",
    "Order status",
    "Order Id",
    "Date",
    "Status",
    "Action"
]

export type TData = {
    destination: string,
    courier_name?: string | null,
    order_status: string,
    order_id: string,
    date: string,
    status: string,
}[]
export const tableData: TData = [
    {
        destination: "Ikeja-Ikorodu",
        courier_name: "John Tae",
        order_status: "Assigned",
        order_id: "#110934A2",
        date: "12-20-2022",
        status: "In transit",
    },
    {
        order_id: "#110934D2",
        destination: "Ikeja-Ikorodu",
        courier_name: "John Tae",
        order_status: "Unassigned",
        date: "12-20-2022",
        status: "Canceled",
    },
    {
        order_id: "#110934C2",
        destination: "Ikeja-Ikorodu",
        courier_name: "John Tae",
        order_status: "Unassigned",
        date: "12-20-2022",
        status: "Pending",
    },
    {
        order_id: "#110934B2",
        destination: "Ikeja-Ikorodu",
        courier_name: "John Tae",
        order_status: "Assigned",
        date: "12-20-2022",
        status: "Delivered",
    }
] 