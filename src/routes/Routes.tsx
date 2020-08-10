import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Home, Login, Register, NotFound, MyPage, CreatePostPage } from '../pages'

export default function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/mypage" exact component={MyPage} />
                    <Route path="/create" exact component={CreatePostPage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    )
}
