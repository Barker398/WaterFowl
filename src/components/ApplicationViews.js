import React from "react";
import { Route } from "react-router-dom";
import { DietList } from "./diets/DietList";
import { DietProvider } from "./diets/DietProvider";
import { DuckDetail } from "./ducks/DuckDetail";
import { DuckList } from "./ducks/DuckList";
import { DuckProvider } from "./ducks/DuckProvider";
import { FlywayList } from "./flyways/FlywayList";
import { FlywayProvider } from "./flyways/FlywayProvider";
import { HabitatList } from "./habitats/HabitatList";
import { HabitatProvider } from "./habitats/HabitatProvider";

export const ApplicationViews = () => {
    return (
        <>
            <DuckProvider>
                <FlywayProvider>
                    <HabitatProvider>
                        <DietProvider>
                            <Route exact path="/ducks">
                                <DuckList />
                            </Route>
                            <Route exact path="/ducks/detail/:duckId(\d+)">
                                <DuckDetail />    
                            </Route>
                            <Route exact path="/flyways">
                                <FlywayList />
                            </Route>
                            <Route exact path="/habitats">
                                <HabitatList />    
                            </Route>
                            <Route exact path="/diets">
                                <DietList />
                            </Route>
                        </DietProvider>
                    </HabitatProvider>
                </FlywayProvider>
            </DuckProvider>
        </>
    )
}