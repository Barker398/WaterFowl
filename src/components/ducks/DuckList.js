import { useContext, useEffect } from "react"
import { DuckContext } from "./DuckProvider"
import { Link, useHistory } from "react-router-dom"
import "./Duck.css"

export const DuckList = () => {
    const { ducks, getDucks, removeDuck } = useContext(DuckContext)

    const history = useHistory()

    useEffect(() => {
        getDucks()
    }, [])

    const handleDelete = (duckId) => {
        removeDuck(duckId)
            .then(() => {
                history.push("/ducks")
            })
    }

    return (

        <section className="ducks">
            <h1 className="list__ducks">Duck Species</h1>
            <section className="list__section">
                {ducks.map((duck) => {
                    return (
                        <div className="duck" key={duck.id} id={`duck--${duck.id}`}>
                            <Link to={`/ducks/detail/${duck.id}`}>
                                <button className="commonName">{duck.commonName}</button>
                            </Link>
                            <img src={duck.url} alt="duck pictures" className="image" />
                            <button className="delete" onClick={() => handleDelete(duck.id)}>
                                Remove Waterfowl
                            </button>
                        </div>
                    )
                })}</section>
            <button className="add" onClick={
                () => history.push("/ducks/create")}>
                Add Waterfowl
            </button>
        </section>

    )
}