import { useState } from "react";

function useSessionStorage(key, initialValue) {

    //let seccionStorageUser = sessionStorage.getItem("user");
    let seccionStorageUser = sessionStorage.getItem(key);
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