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

    // return (
        
    // )
}