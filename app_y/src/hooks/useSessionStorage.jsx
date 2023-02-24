import { useState } from "react";

const sessionData = {

}

const sessionStorage = {
    getItem: (key) => {
        return sessionData[key]
    },
    setItem: (key, data) => {
        sessionData[key] = data
    }    
}

function useSessionStorage(key, initialValue=null) {

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
    console.log("*******+", sessionData);

    return [value, saveUser];
}

export default useSessionStorage;