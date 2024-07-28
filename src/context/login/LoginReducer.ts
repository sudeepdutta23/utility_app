import { initialValues } from "./LoginContext";

export const LoginReducer = (state: any, action: any) =>{
    switch (action.type) {
        case "setLogin":
            return {...state, isLoggedIn: true };
        case "clearData":
            return initialValues;
        default:
            return state;
    }
}