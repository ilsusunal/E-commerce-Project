import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ShopPage from "../pages/ShopPage"
import ContactPage from "../pages/ContactPage"
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import ProductPage from '../pages/ProductPage';

export default function PageContent(){

    return(
        <>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" exact component={ShopPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/blog" exact component={BlogPage} />
            <Route path="/product/:id" exact component={ProductPage} />
        </Switch>
        </>
    )
}