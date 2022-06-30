import React from "react";
import { Route } from "react-router-dom";
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
                        <Route exact path="/ducks">
                            <DuckList />
                        </Route>
                        <Route path="/flyways">
                            <FlywayList />
                        </Route>
                        <Route exact path="/habitats">
                            <HabitatList />    
                        </Route>
                    </HabitatProvider>
                </FlywayProvider>
            </DuckProvider>
        </>
    )
}