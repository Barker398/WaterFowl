import { createContext, useState } from "react";


export const FlywayContext = createContext()

export const FlywayProvider = (props) => {
    const [flyways, setFlyways] = useState([])

    const getFlyways = () => {
        return fetch("http://localhost:8088/flyways")
            .then(res => res.json())
            .then(setFlyways)
    }

    return (
        <FlywayContext.Provider value={{
            flyways, getFlyways
        }}>
            {props.children}
        </FlywayContext.Provider>
    )
}