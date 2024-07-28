import { createContext } from "react";

export const initialValues = {
    isLoggedIn: false,
    user: {
        name: "",
        mobile: "",
        email:"",
    }
}

export const LoginContextProvider: any = createContext(initialValues);