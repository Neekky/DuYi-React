import React from 'react'
import { Provider, connect } from "react-redux"
import store from "./store"
import { Route, Switch } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"
import Admin from "./pages/Admin"
import Login from "./pages/Login"
import Test from "./pages/Test"
import history from "./store/history"

export default function App(props) {
    console.log(props.router)
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/test" component={Test} />
                    <Route path="/" component={Admin} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
}


