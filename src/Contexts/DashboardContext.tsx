// Depreciated
export { }
// import React, {
//     createContext, Dispatch, SetStateAction, useContext, useMemo, useReducer, useState
// } from 'react'
// import {
//     viewReducer, State, Action, emptyView
// } from '../reducers/dashboardViewReducer';

// type Context = {
//     views?: State,
//     dispatchView?: Dispatch<Action>,
//     shipmentStatus: string,
//     setShipmentStatus: Dispatch<SetStateAction<string>>
// }

// const Provider = createContext<Context>({ shipmentStatus: "Order", setShipmentStatus: () => { } });

// interface Props {
//     children: JSX.Element
// }

// function DashboardContext({ children }: Props): JSX.Element {
//     const [views, dispatchView] = useReducer(viewReducer, emptyView)
//     const [shipmentStatus, setShipmentStatus] = useState<
//         "Order" |
//         "In transit" |
//         "Canceled" |
//         "Delayed" |
//         "Delivered" |
//         "Pending"
//     >("Order");


//     const changes = useMemo(
//         () => ({
//             views,
//             dispatchView,
//             shipmentStatus,
//             setShipmentStatus
//         }),
//         [views, dispatchView, shipmentStatus, setShipmentStatus]
//     )
//     // const changesToWatch = {
//     //     views, tabIndex, shipmentStatus
//     // }
//     // const values = useMemo(() => (changes)

//     return (
//         <Provider.Provider
//             value={changes}
//         >
//             {children}
//         </Provider.Provider>
//     )
// }

// export default DashboardContext

// export const DashboardStates = () => useContext(Provider)
