import { useContext, useEffect } from "react"

export const HabitatList = () => {
    const { habitats, getHabitats } = useContext(HabitatContext)

    useEffect(() => {
        getHabitats()
    }, [])

    return (
        <section className="habitats">
            <h1 className="list__header">Habitats</h1>
            <section className="list__section">
                {habitats.map((habitat) => {
                    return (
                        <div className="habitat" key={habitat.id} id={`habitat--${habitat.id}`}>
                            <div className="habitat__decription">
                                Habitat: {habitat.description}    
                            </div>
                        </div>
                    )
                })}    
            </section>    
        </section>
    )
}