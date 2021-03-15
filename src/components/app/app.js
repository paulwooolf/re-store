import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';
import {CartPage, HomePage} from "../pages";
import ShopHeader from "../shop-header/shop-header";

const App = () => {
    return (
        <div>
            <ShopHeader />
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />
                <Route
                    path="/cart"
                    component={CartPage} />
            </Switch>
        </div>
    )
}

export default App;
