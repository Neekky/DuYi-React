import React from 'react'
import { Provider } from "./myReactRedux"
import store from "./store"
import StudentSearch from "./components/studentsSearch"
// import Counter from "./components/Counter"

export default function App() {
    return (
        <Provider store={store}>
            <StudentSearch/>
        </Provider>
    )
}
