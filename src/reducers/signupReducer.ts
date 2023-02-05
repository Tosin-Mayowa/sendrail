

const signupReducer = (state, action) => {

    if (action.type === "business name") {
        return { ...state, bussName: action.payload }
    }
    if (action.type === "select inp") {
        return { ...state, select: action.payload }
    }
    if (action.type === "Buss Address") {
        return { ...state, bussAdd: action.payload }
    }
    if (action.type === "state val") {
        return { ...state, stateVal: action.payload }
    }
    if (action.type === "country") {
        return { ...state, country: action.payload }
    }
    if (action.type === "First Name") {
        return { ...state, firstName: action.payload }
    }
    if (action.type === "Last name") {
        return { ...state, lastName: action.payload }
    }
    if (action.type === "state info") {
        return { ...state, stateInfo: action.payload }
    }
    if (action.type === "country info") {
        return { ...state, countryInfo: action.payload }
    }
    if (action.type === "email") {
        return { ...state, email: action.payload }
    }
    if (action.type === "password") {
        return { ...state, password: action.payload }
    }

    return state;
}
export default signupReducer;