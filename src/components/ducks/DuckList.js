import { useContext, useEffect } from "react"
import { DuckContext } from "./DuckProvider"
import "./Duck.css"

export const DuckList = () => {
    const { ducks, getDucks } = useContext(DuckContext)

    useEffect(() => {
        getDucks();
    }, []);

    return (
        <>
            <article className="ducks">
                <h1 className="list__header">Ducks</h1>
                <section className="list__section">
                    {ducks.map((duck) => {
                        return (
                            <div className="duck" key={duck.id} id={`duck--${duck.id}`}>
                                <div className="duck__commonName">
                                    Common Name: { duck.commonName }    
                                </div>
                                <div className="duck__speciesName">
                                    Species Name: { duck.speciesName }
                                </div>
                                <div className="duck__flywayId">
                                    Species Name: { duck.flywayId }
                                </div>
                                <div className="duck__dietId">
                                    Species Name: { duck.dietId }
                                </div>
                                <div className="duck__habitatId">
                                    Species Name: { duck.habitatId }
                                </div>
                            </div>
                        )
                    })}</section>
            </article>
        </>
    )
}