import React from 'react';
import { useEffect, FC } from "react";
// This is a React Router v6 app
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

// Importing Components
// 1) Home Page
import Home from "../Pages/Home";

import { useTranslation, Trans } from 'react-i18next';

import i18n from "../i18n";

const baseRouteUrl = "/:locale(ar|en|de|chi)?";
export const baseUrl = i18n.language === '/en' ? '' : '/' + i18n.language;

interface AppRouterProps {
    mobileViewContainer?: any,
    currentTab?: any,
    setCurrentTab?: any
}

const AppRouter: FC<AppRouterProps> = ({
    // Props can be passed here if required
}): JSX.Element => {

    const { t } = useTranslation();

    useEffect(() => {
        console.log("The base url is equal to : ", baseRouteUrl);
    })

    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home />} />
            </Routes>
        </Router>
    )
}
export default AppRouter;