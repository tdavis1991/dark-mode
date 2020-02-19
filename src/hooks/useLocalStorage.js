import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        //assigning item to the key that is passed into the function
        const item = window.localStorage.getItem(key);
        //if their is a item/key return JSON.parse(item) if not return intialValue
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        //setting the state of the hook to the parameter passed into setValue
        setStoredValue(value);
        //adding an item to local storage with the key that was passed into the custom hook and the value that was passed into setValue function
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}

export default useLocalStorage;