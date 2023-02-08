import React, {
    createContext, Dispatch, useContext, useMemo, useReducer, useState
} from 'react'
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

function OverviewContext({ children }: Props) {
    const [views, dispatchView] = useReducer(viewReducer, { current_view: "overview", initial_view: null })
    const [balance, setBalance] = useState<number>(1250)

    const changes = {
        views, dispatchView,
        balance, setBalance
    }
    const changesToWatch = {
        views, balance
    }
    const values = useMemo(() => (changes)
        , [changesToWatch])
    return (
        <Provider.Provider
            value={values}
        >
            {children}
        </Provider.Provider>
    )
}

export default OverviewContext

export const OverviewStates = () => useContext(Provider)
