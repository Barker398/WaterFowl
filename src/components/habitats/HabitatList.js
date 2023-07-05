import { useContext, useEffect } from "react"
import { HabitatContext } from "./HabitatProvider"

export const HabitatList = () => {
    const { habitats, getHabitats } = useContext(HabitatContext)

    useEffect(() => {
        getHabitats()
    }, [])

    const handleDelete = (habitatId) => {
        removeHabitat(habitatId)
            .then(() => {
                history.push("/habitats")
            })
    }

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
                            <button className="delete" onClick={() => handleDelete(habitat.id)}>
                                Remove Habitat
                            </button>
                        </div>
                    )
                })}
            </section>
        </section>
    )
}