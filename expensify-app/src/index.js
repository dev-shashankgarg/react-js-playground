import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routes/AppRouter'

import {Provider} from 'react-redux'
import configureStore from './store/configure-store'

import { newExpense } from './actions/expenseActions'

const store = configureStore()

store.dispatch(newExpense({ note: 'Water Bill', amount: '$100', createdAt: 10 }))
store.dispatch(newExpense({ note: 'Gas Bill', amount: '$140', createdAt: 12 }))

ReactDOM.render(
    <Provider store={store}>
        <AppRouter></AppRouter>
    </Provider>, document.querySelector("#root"))