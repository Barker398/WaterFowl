import { createContext, useState } from "react";


export const DuckContext = createContext()

export const DuckProvider = (props) => {
    const [ducks, setDucks] = useState([])
    const [duck, setDuck] = useState([])

    const getDucks = () => {
        return fetch("http://localhost:8088/ducks?_expand=flyway&_expand=diet&_expand=habitat")
        .then(res => res.json())
        .then(setDucks)
    }

    const getDuckById = (duckId) => {
        return fetch(`http://localhost:8088/ducks?id=${duckId}`)
        .then(res => res.json())
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
            ducks, duck, setDuck, getDucks, getDuckById, addDucks
        }}>
            {props.children} 
        </DuckContext.Provider>
    )
}