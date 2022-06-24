import { createContext, useState } from "react";


export const DuckContext = createContext()

export const DuckProvider = (props) => {
    const [ducks, setDucks] = useState([])

    const getDucks = () => {
        return fetch("http://localhost:8088/ducks")
        .then(res => res.json())
        .then(setDucks)
    }
     
    const addDucks = duckObj => {
        return fetch("http://localhost:8088/ducks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(duckObj)
        })
        .then(getDucks)
    }

    return (
        <DuckContext.Provider value={{
            ducks, getDucks, addDucks
        }}>
              {props.children} 
        </DuckContext.Provider>
    )
}