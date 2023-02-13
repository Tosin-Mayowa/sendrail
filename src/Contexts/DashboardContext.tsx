import React, {
    createContext, Dispatch, SetStateAction, useContext, useMemo, useReducer, useState
} from 'react'
import { viewReducer, State, Action, emptyView } from '../reducers/dashboardViewReducer';

type Context = {
    views: State,
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
    const [views, dispatchView] = useReducer(viewReducer, emptyView)
    const [tabIndex, setTabIndex] = useState<number>(0)
    const [shipmentStatus, setShipmentStatus] = useState<
        "Order" |
        "In transit" |
        "Canceled" |
        "Delayed" |
        "Delivered" |
        "Pending"
    >("Order");

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
