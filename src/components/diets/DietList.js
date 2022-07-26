// import { useContext, useEffect } from "react"
// import { DietContext } from "./DietProvider"

// export const DietList = () => {
//     const { diets, getDiets } = useContext(DietContext)

//     useEffect(() => {
//         getDiets()
//     }, [])

//     return (
//         <section className="diets">
//             <h1 className="list__header">Diets</h1>
//             <section className="list__section">
//                 {diets.map((diet) => {
//                     return (
//                         <div className="diets" key={diet.id} id={`diet--${diet.id}`}>
//                             <div className="diet__foodtype">
//                                 Diet: {diet.foodType}    
//                             </div>    
//                         </div>
//                     )
//                 })}    
//             </section>    
//         </section>
//     )
// }
