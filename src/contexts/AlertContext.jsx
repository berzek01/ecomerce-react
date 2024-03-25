import { createContext, useContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false);
    const callAlert = () => {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2500)
    }
    return (
        <AlertContext.Provider
            value={{
                alert,
                callAlert
            }}
        >
            {children}
        </AlertContext.Provider>
    );
}

export const useAlert = () => {
    return useContext(AlertContext)
}
