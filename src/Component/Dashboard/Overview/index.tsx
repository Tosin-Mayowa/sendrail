import React from 'react'
import DashboardOverview from './DashboardOverview/Overview'
import { OverviewStates } from '../../../Contexts/OverviewContext'
import Withdraw from './Withdraw'
import Deposit from './Deposit'

function Index(): JSX.Element {
    const { views } = OverviewStates();
    switch (views?.current_view) {
        case "overview":
            return <DashboardOverview />;
        case "withdraw-1":
            return <Withdraw />;
        case "deposit-1":
            return <Deposit />;
        case "deposit-2":
            return <Deposit />;
        case "deposit-3":
            return <Deposit />;

        default:
            return <DashboardOverview />;
    }
}

export default Index