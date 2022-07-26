import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { DietContext } from "../diets/DietProvider";
import { FlywayContext } from "../flyways/FlywayProvider";
import { HabitatContext } from "../habitats/HabitatProvider";
import { DuckContext } from "./DuckProvider"


export const DuckForm = () => {
    const { addDuck } = useContext(DuckContext)
    const { flyways, getFlyways } = useContext(FlywayContext)
    const { diets, getDiets } = useContext(DietContext)
    const { habitats, getHabitats } = useContext(HabitatContext)

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
        getFlyways().then(getDiets).then(getHabitats)
    }, [])

    const handleControlledInputChange = (e) => {

        const newDuck = { ...duck }

        newDuck[e.target.id] = e.target.value

        setDuck(newDuck)
    }

    const handleClickSaveDuck = (e) => {
        e.preventDefault()

        // const duckId = parseInt(duck.id)
        const flywayId = parseInt(duck.flywayId)
        const dietId = parseInt(duck.dietId)
        const habitatId = parseInt(duck.habitatId)

        if (flywayId === 0 || dietId === 0 || habitatId === 0) {
            window.alert("Select a flyway, diet, and habitat")
        }
        else {
            const newDuck = {
                commonName: duck.commonName,
                speciesName: duck.speciesName,
                flywayId: flywayId,
                dietId: dietId,
                habitatId: habitatId,
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
                    <input type="text" id="commonName" required autoFocus className="form-control" placeholder="CommonName" value={duck.commonName} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="speciesName">Species Name:</label>
                    <input type="text" id="speciesName" required autoFocus className="form-control" placeholder="SpeciesName" value={duck.speciesName} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="flyway">Flyway: </label>
                    <select name="flywayId" id="flywayId" className="form-control" value={duck.flywayId} onChange={handleControlledInputChange}>
                        <option value="0">Select Flyway</option>
                        {flyways.map(f => (
                            <option key={f.id} value={f.id}>
                                {f.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="diet">Diet: </label>
                    <select name="dietId" id="dietId" className="form-control" value={duck.dietId} onChange={handleControlledInputChange}>
                        <option value="0">Select Diet</option>
                        {diets.map(d => (
                            <option key={d.id} value={d.id}>
                                {d.foodType}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="habitat">Habitat: </label>
                    <select name="habitatId" id="habitatId" className="form-control" value={duck.habitatId} onChange={handleControlledInputChange}>
                        <option value="0">Select Habitat</option>
                        {habitats.map(h => (
                            <option key={h.id} value={h.id}>
                                {h.description}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveDuck}>
                Save Waterfowl
            </button>
        </form>
    )
}