import React from "react";
import {FC} from "react";
import {Outlet} from "react-router-dom";

const MainLayout: FC = () => {

    return (
        <React.Fragment>
            <Outlet/>
        </React.Fragment>
    );
};

export {MainLayout};