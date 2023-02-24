// Depreciated
export { }

// import React, {
//     createContext, Dispatch, SetStateAction, useContext, useMemo, useState
// } from 'react'

// type Context = {
//     balance?: number,
//     setBalance?: Dispatch<SetStateAction<number>>
// }

// const Provider = createContext<Context>({});

// interface Props {
//     children: JSX.Element
// }

// function OverviewContext({ children }: Props) {
//     const [balance, setBalance] = useState<number>(1250)
//     console.log(balance)
//     const changes = useMemo(
//         () => ({
//             balance,
//             setBalance
//         }),
//         [balance]
//     )
//     // const changesToWatch = {
//     //     balance
//     // }
//     // const values = useMemo(() => (changes)
//     //     , [changes])
//     return (
//         <Provider.Provider
//             value={changes}
//         >
//             {children}
//         </Provider.Provider>
//     )
// }

// export default OverviewContext

// export const OverviewStates = () => useContext(Provider)
