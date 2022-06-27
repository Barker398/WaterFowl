import { useContext, useEffect } from "react"
import { FlywayContext } from "./FlywayProvider"


export const FlywayList = () => {
    const { flyways, getFlyways } = useContext(FlywayContext)

    useEffect(() => {
        console.log("FlywayList: useEffect - getFlyways")
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
                        </div>
                    )
                })}
            </section>
        </section>
    )
}