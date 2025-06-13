import React, { createContext, useState, useContext, useCallback } from "react";

const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    // Add alert
    const showAlert = useCallback(({ message, variant = "info", timeout = 3000 }) => {
        const id = Date.now();
        setAlerts((prev) => [...prev, { id, message, variant }]);

        // Auto remove alert after timeout
        setTimeout(() => {
            setAlerts((prev) => prev.filter((alert) => alert.id !== id));
        }, timeout);
    }, []);

    // Remove alert manually (optional)
    const removeAlert = (id) => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    };

    return (
        <AlertContext.Provider value={{ alerts, showAlert, removeAlert }}>
            {children}
        </AlertContext.Provider>
    );
};
