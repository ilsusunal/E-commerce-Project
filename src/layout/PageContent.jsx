import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ShopPage from "../pages/ShopPage"

export default function PageContent(){

    return(
        <>
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/shop" exact component={ShopPage} />
            </Switch>
        </Router>
        </>
    )
}