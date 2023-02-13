type Views = {
    current_view?: string;
    initial_view?: string;
}
export interface State {
    overview?: Views,
    shipment?: Views,
    customer?: Views,
    logout?: boolean
}

export const emptyView = {
    overview: { current_view: "-" },
    shipment: { current_view: "-" },
    customer: { current_view: "-" },
    logout: false
}

export type Action = {
    type?: string,
    current_view?: string | boolean;
    initial_view?: string;
}

const getReturns = (state: State, action: Action, view: string) => {
    if (action.current_view === state[view].current_view) {
        return {
            [view]: {
                initial_view: state[view].initial_view,
                current_view: state[view].current_view,
            }
        }
    }
    return {
        [view]: {
            initial_view: state[view].current_view,
            current_view: action.current_view,
        }
    }
}

export const viewReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "change_overview_view":
            return getReturns(state, action, "overview")
        case "change_shipment_view":
            return getReturns(state, action, "shipment")
        case "logout":
            return {
                logout: Boolean(action.current_view)
            }
        case "clear_views":
            return emptyView

        default:
            return state
    }
    return state
}