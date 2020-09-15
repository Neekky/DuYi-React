import React, { useEffect } from 'react'
import Layout from "../components/Layout"
import Header from "../components/Header"
import Menu from "../components/Menu"
import { Route, Switch } from "react-router-dom"
import Welcome from "./Welcome"
import StudentList from "./student/StudentList"
import StudentAdd from "./student/StudentAdd"
import CourseList from "./course/CourseList"
import CourseAdd from "./course/CourseAdd"
import StudentDetail from "./student/StudentDetail"
import { connect } from 'react-redux'

function Admin(props) {
    console.log(props.router,'lll')

    return (
        <Layout
            header={<Header />}
            aside={<Menu />}
        >
            <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/students" exact component={StudentList} />
                <Route path="/students/add" exact component={StudentAdd} />
                <Route path="/students/:sno" exact component={StudentDetail} />
                <Route path="/courses" exact component={CourseList} />
                <Route path="/courses/add" exact component={CourseAdd} />
            </Switch>
        </Layout>
    )
}

const mapStateToProps = function (state, props) {
    return {
        router: state.router.location.pathname
    }
}

export default connect(mapStateToProps, null)(Admin);
