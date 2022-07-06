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
                <div className="animal__breed">{props.animal.breed}</div>
                <div className="animal__location">Location: {props.animal.location.name}</div>
                <div className="animal__owner">Customer: {props.animal.customer.name}</div>
            </section>
        </>
    )
}