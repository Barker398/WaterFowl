import { useContext, useEffect } from "react"
import { DuckContext } from "./DuckProvider"
import "./Duck.css"
import { Link } from "react-router-dom"

export const DuckList = () => {
    const { ducks, getDucks } = useContext(DuckContext)


    useEffect(() => {
        getDucks()
    }, [])

    return (

        <section className="ducks">
            <h1 className="list__header">Ducks</h1>
            <section className="list__section">
                {ducks.map((duck) => {
                    return (
                        <div className="duck" key={duck.id} id={`duck--${duck.id}`}>
                            <Link to={`/ducks/detail/${duck.id}`}>
                                <button className="commonName">{duck.commonName}</button>
                            </Link>
                            <img src={duck.url} alt="duck pictures" class="center" />
                        </div>

                    )
                })}</section>
        </section>

    )
}