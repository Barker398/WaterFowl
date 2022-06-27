import React from "react";
import { Route } from "react-router-dom";
import { DuckList } from "./ducks/DuckList";
import { DuckProvider } from "./ducks/DuckProvider";
import { FlywayList } from "./flyways/FlywayList";
import { FlywayProvider } from "./flyways/FlywayProvider";

export const ApplicationViews = () => {
    return (
        <>
            <DuckProvider>
                <FlywayProvider>
                    <Route exact path="/ducks">
                        <DuckList />
                    </Route>
                    <Route exact path="/flyways">
                        <FlywayList />
                    </Route>
                </FlywayProvider>
            </DuckProvider>
        </>
    )
}