import React from "react";
import { Route } from "react-router-dom";
import { DuckProvider } from "./ducks/DuckProvider";

export const ApplicationViews = () => {
    return (
        <>
            <DuckProvider>
                <Route path="/waterfowl">
                </Route>
            </DuckProvider>
        </>
    )
}