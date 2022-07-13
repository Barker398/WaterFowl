import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { DuckContext } from "./DuckProvider"


export const DuckDetail = (props) => {
    const { getDuckById } = useContext(DuckContext)
    const { duckId } = useParams();

    useEffect(() => {
        getDuckById(duckId)
    }, [])

    return (
        <>
            <section className="duck">
                <h3 className="duck__commonName">{props.duck.commonName}</h3>
                <div className="duck__speciesName">Species Name: {props.duck.speciesName}</div>
                <div className="duck__flyway">Flyway: {props.duck.flyway.name}</div>
                <div className="duck__diet">Diet: {props.duck.diet.foodType}</div>
                <div className="duck__habitat">Habitat: {props.duck.habitat.description}</div>
            </section>
        </>
    )
}