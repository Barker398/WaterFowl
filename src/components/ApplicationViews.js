import React from "react";
import { Route } from "react-router-dom";
import { DuckList } from "./ducks/DuckList";
import { DuckProvider } from "./ducks/DuckProvider";
import { FlywayProvider } from "./flyways/FlywayProvider";

export const ApplicationViews = () => {
    return (
        <>
            <DuckProvider>
                <Route exact path="/ducks">
                    <DuckList />
                </Route>
            </DuckProvider>
            <FlywayProvider>
                <Route exact path="/flyways">
                </Route>
            </FlywayProvider>
        </>
    )
}