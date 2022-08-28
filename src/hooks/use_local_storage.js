import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
                
        localStorage.setItem(key, JSON.stringify(valueToStore));
        setStoredValue(valueToStore);
    }
    return [storedValue, setValue];
}

export default useLocalStorage;