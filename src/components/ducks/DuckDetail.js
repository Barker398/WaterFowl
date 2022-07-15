import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DuckContext } from "./DuckProvider"
import "./Duck.css"

export const DuckDetail = (props) => {
    const { ducks } = useContext(DuckContext)
    const [ duck, setDuck ] = useState({ flyway: {}, diet: {}, habitat: {}})

    const { duckId } = useParams();

    // useEffect(() => {
    //     getDuckById(duckId)
    // }, [])

    useEffect(() => {
        const thisDuck = ducks.find(d => d.id === duckId) || { flyway: {}, diet: {}, habitat: {} }
        setDuck(thisDuck)
    }, [duckId])

    return (
        <>
            <section className="duck">
                <h3 className="duck__commonName">{duck.commonName}</h3>
                <div className="duck__speciesName">Species Name: {duck.speciesName}</div>
                <div className="duck__flyway">Flyway: {duck.flyway.name}</div>
                <div className="duck__diet">Diet: {duck.diet.foodType}</div>
                <div className="duck__habitat">Habitat: {duck.habitat.description}</div>
            </section>
        </>
    )
}