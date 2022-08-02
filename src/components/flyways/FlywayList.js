import { useContext, useEffect } from "react"
import { FlywayContext } from "./FlywayProvider"
import "./Flyway.css"

export const FlywayList = () => {
    const { flyways, getFlyways } = useContext(FlywayContext)

    useEffect(() => {
        getFlyways()
    }, [])

    return (
        <section className="flyways">
            <h1 className="list__header">Flyways</h1>
            <section className="list__section">
                {flyways.map((flyway) => {
                    return (
                        <div className="flyway" key={flyway.id} id={`flyway--${flyway.id}`}>
                            <div className="flyway__name">
                                FlyWay: {flyway.name}
                            </div>
                            <img src={flyway.url} alt="flyway pictures" />
                        </div>
                    )
                })}
            </section>
        </section>
    )
}