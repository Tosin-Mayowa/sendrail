import React, { createContext, Dispatch, useContext, useReducer, useState } from 'react'
import { viewReducer } from '../reducers/dashboardViewReducer';

type Action = {
    type?: string,
    current_view: string;
    initial_view?: string;
}

type Context = {
    views: Action,
    dispatchView: Dispatch<Action>,
    balance: number,
    setBalance: any
}

const Provider = createContext<Context>(null);

interface Props {
    children: JSX.Element
}

const OverviewContext: React.FC<Props> = ({ children }) => {
    const [views, dispatchView] = useReducer(viewReducer, { current_view: "overview", initial_view: null })
    const [balance, setBalance] = useState<number>(1250)
    return (
        <Provider.Provider
            value={{
                views, dispatchView,
                balance, setBalance
            }}
        >
            {children}
        </Provider.Provider>
    )
}

export default OverviewContext

export const OverviewStates = () => useContext(Provider)
