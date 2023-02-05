import React from 'react'
import DashboardOverview from './DashboardOverview/Overview'
import { OverviewStates } from '../../../Contexts/OverviewContext'
import Withdraw from './Withdraw'
import Deposit from './Deposit'

const Index = (): JSX.Element => {
    const { views } = OverviewStates();
    switch (views?.current_view) {
        case "overview":
            return <DashboardOverview />;
        case "withdraw":
            return <Withdraw />;
        case "deposit":
            return <Deposit />;

        default:
            return <DashboardOverview />;
    }
}

export default Index