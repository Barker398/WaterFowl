import { createContext, useState } from "react";


export const DietContext = createContext()

export const DietProvider = (props) => {
    const [diets, setDiets] = useState([])

    const getDiets = () => {
        return fetch("http://localhost:8088/diets")
            .then(res => res.json())
            .then(setDiets)
    }

    return (
        <DietContext.Provider value={{
            diets, getDiets
        }}>
            {props.children}
        </DietContext.Provider>
    )
}