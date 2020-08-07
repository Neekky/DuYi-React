import React from 'react';
import Counter from './Counter';
import { routerRedux, NavLink, Route, Switch } from './myDva/router';

function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default function ({history}) {
    return (
        <routerRedux.ConnectedRouter history={history}>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter">计数器</NavLink>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route path="/counter" component={Counter}></Route>
                        <Route path="/" component={Home}></Route>
                    </Switch>
                </div>
            </div>
        </routerRedux.ConnectedRouter>
    );
}