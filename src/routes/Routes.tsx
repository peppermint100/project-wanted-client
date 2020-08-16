import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Home, Login, Register, NotFound, MyPage, CreatePostPage, PostDetailPage, UpdatePostPage, ApplicationManagerPage } from '../pages'

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
                    <Route path="/update" exact component={UpdatePostPage} />
                    <Route path="/postdetail/:postId" exact component={PostDetailPage} />
                    <Route path="/application/:userId" exact component={ApplicationManagerPage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    )
}