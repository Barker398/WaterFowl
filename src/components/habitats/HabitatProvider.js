import { createContext, useState } from "react";

export const HabitatContext = createContext()

export const HabitatProvider = (props) => {
    const [habitats, setHabitats] = useState([])

    const getHabitats = () => {
        return fetch("http://localhost:8088/habitats")
        .then(res => res.json())
        .then(setHabitats)
    }

    return (
        <HabitatContext.Provider value={{
            habitats, getHabitats
        }}>
            {props.children}    
        </HabitatContext.Provider>
    )
}