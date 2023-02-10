import React, {
    createContext, Dispatch, SetStateAction, useContext, useMemo, useReducer, useState
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
    tabIndex: number,
    setTabIndex: Dispatch<SetStateAction<number>>,
    shipmentStatus: string,
    setShipmentStatus: Dispatch<SetStateAction<string>>
}

const Provider = createContext<Context>(null);

interface Props {
    children: JSX.Element
}

function DashboardContext({ children }: Props): JSX.Element {
    const [views, dispatchView] = useReducer(viewReducer, { current_view: "overview", initial_view: null })
    const [tabIndex, setTabIndex] = useState(0)
    const [shipmentStatus, setShipmentStatus] = useState("Order");

    const changes = {
        views, dispatchView,
        tabIndex, setTabIndex,
        shipmentStatus, setShipmentStatus
    }
    const changesToWatch = {
        views, tabIndex, shipmentStatus
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

export default DashboardContext

export const DashboardStates = () => useContext(Provider)
