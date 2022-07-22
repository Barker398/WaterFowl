import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { DuckContext } from "./DuckProvider"


export const DuckForm = () => {
    const { addDuck } = useContext(DuckContext)
    const { ducks, getDucks } = useContext(DuckContext)

    const [duck, setDuck] = useState({
        commonName: "",
        speciesName: "",
        flywayId: 0,
        dietId: 0,
        habitatId: 0,
        url: "",
    });

    const history = useHistory()

    useEffect(() => {
        getDucks()
    }, [])

    const handleControlledInputChange = (e) => {

        const newDuck = { ...duck }

        newDuck[e.target.id] = e.target.value

        setDuck(newDuck)
    }

    const handleClickSaveDuck = (e) => {
        e.preventDefault()

        const duckId = parseInt(duck.id)

        if (duckId === 0) {
            window.alert("Add Waterfowl")
        }
        else {
            const newDuck = {
                commonName: duck.commonName,
                speciesName: duck.speciesName,
                flywayId: duck.flywayId,
                dietId: duck.dietId,
                habitatId: duck.habitatId,
                url: duck.url,
            }
            addDuck(newDuck)
                .then(() => history.push("/ducks"))
        }
    }

    return (
        <form className="duckForm">
            <h2 className="duckForm__title">New Duck</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="commonName">Common Name:</label>
                    <input type="text" id="commonName" required autoFocus className="form-control" placeholder="CommonName" value={ducks.commonName} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="speciesName">Species Name:</label>
                    <input type="text" id="speciesName" required autoFocus className="form-control" placeholder="SpeciesName" value={ducks.speciesName} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="flyway">Flyway: </label>
                    <input type="text" id="flyway" required autoFocus className="form-control" placeholder="Flyway" value={ducks.flywayId} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="diet">Diet: </label>
                    <input type="text" id="diet" required autoFocus className="form-control" placeholder="Diet" value={ducks.dietId} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="habitat">Habitat: </label>
                    <input type="text" id="habitat" required autoFocus className="form-control" placeholder="Habitat" value={ducks.habitatId} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveDuck}>
                Save Waterfowl
            </button>
            </form>
            )
}