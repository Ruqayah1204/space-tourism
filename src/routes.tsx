import Layout from "./Layout";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology from "./pages/Technology";

export const routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            { index: true, element: <Home/> },
            { path: "destination", element: <Destination/> },
            { path: "crew", element: <Crew/> },
            { path: "technology", element: <Technology/> },
        ]
    }
]