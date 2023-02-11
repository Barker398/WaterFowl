import { useContext, useEffect } from "react"
import { FlywayContext } from "./FlywayProvider"
import "./Flyway.css"

export const FlywayList = () => {
    const { flyways, getFlyways } = useContext(FlywayContext)

    useEffect(() => {
        getFlyways()
    }, [])

    return (

        <article className="flyways">
            <h1 className="list__flyway">Flyways</h1>
            <section className="list__section">
                {flyways.map((flyway) => {
                    return (
                        <div className="flyway" key={flyway.id} id={`flyway--${flyway.id}`}>
                            <h3 className="flyway__name">
                                {flyway.name}
                            </h3>
                            <img src={flyway.url} alt="flyway pictures" className="flyway_img" />
                        </div>
                    )
                })}
            </section>
        </article>
    )
}