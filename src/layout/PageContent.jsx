import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage"

export default function PageContent(){

    return(
        <>
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
        </Router>
        </>
    )
}