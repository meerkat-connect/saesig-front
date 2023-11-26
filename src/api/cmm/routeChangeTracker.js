import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from "react-ga";

const routeChangeTracker =() => {
    const location = BrowserRouter();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            ReactGA.initialize(import.meta.env.VITE_APP_GA_TRACKING_ID);
        }
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(location.pathname + location.search);
        }
    }, [initialized, location]);
}

export default routeChangeTracker;