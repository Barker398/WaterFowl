import { createContext, useState } from "react";

export const HabitatContext = createContext()

export const HabitatProvider = (props) => {
    const [habitats, setHabitats] = useState([])

    const getHabitats = () => {
        return fetch("http://localhost:8088/habitats")
            .then(res => res.json())
            .then(setHabitats)
    }

    const addHabitat = habitatObj => {
        return fetch("http://localhost:8088/habitats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(habitatObj)
        })
        .then(getHabitats)
    }

    return (
        <HabitatContext.Provider value={{
            habitats, getHabitats, addHabitat
        }}>
            {props.children}
        </HabitatContext.Provider>
    )
}