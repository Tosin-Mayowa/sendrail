
interface State {
    current_view: string;
    initial_view: string;
}

type Action = {
    type?: string,
    current_view: string;
    initial_view: string;
}

export const viewReducer = (state: State, action: Action) => {
    if (action.type === "change_overview_view") {
        if (action.current_view !== state.current_view) {
            return {
                initial_view: state.current_view,
                current_view: action.current_view,
            }
        }
        return {
            initial_view: state.initial_view,
            current_view: state.current_view,
        }
    }
    return state
}