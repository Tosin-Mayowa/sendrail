import React, {
    createContext, useContext, useMemo, useState
} from 'react'

type Context = {
    balance: number,
    setBalance: any
}

const Provider = createContext<Context>(null);

interface Props {
    children: JSX.Element
}

function OverviewContext({ children }: Props) {
    const [balance, setBalance] = useState<number>(1250)

    const changes = useMemo(
      () => ({
        balance,
        setBalance
      }),
      [balance, setBalance]
    )
    // const changesToWatch = {
    //     balance
    // }
    // const values = useMemo(() => (changes)
    //     , [changes])
    return (
        <Provider.Provider
            value={changes}
        >
            {children}
        </Provider.Provider>
    )
}

export default OverviewContext

export const OverviewStates = () => useContext(Provider)
