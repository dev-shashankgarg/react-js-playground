import React from 'react'
import {BrowserRouter , Route , Switch} from 'react-router-dom'

import Header from '../components/Header'
import DashBoard from '../components/DashBoard'
import CreateExpense from '../components/CreateExpense'
import EditExpense from '../components/EditExpense'
import HelpMe from '../components/HelpMe'
import NotFound from '../components/NotFound'

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path='/' component={DashBoard} exact={true} />
                    <Route path='/create' component={CreateExpense} />
                    <Route path='/edit' component={EditExpense} />
                    <Route path='/help' component={HelpMe} />
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter