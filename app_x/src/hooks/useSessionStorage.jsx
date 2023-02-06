import { useState } from "react";

function useSessionStorage(key, initialValue = {}) {
    const seccionStorageUser = sessionStorage.getItem(key);
    let parsedUser;
    
    if(!seccionStorageUser) {
        sessionStorage.setItem(key, JSON.stringify(initialValue));
        parsedUser = initialValue;
    } else {
        parsedUser = JSON.parse(seccionStorageUser);
    }
    
    const [value, setValue] = useState(parsedUser);

    const saveUser = (newUser) => {
        const stringfiedUser = JSON.stringify(newUser);
        sessionStorage.setItem(key, stringfiedUser)
        setValue(newUser);
    }

    return [value, saveUser];
}

export default useSessionStorage;