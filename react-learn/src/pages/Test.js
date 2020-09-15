import React, { Component } from 'react'
import { connect } from "react-redux"

class Test extends Component {
    componentDidMount() {
        console.log('didmount')
    }
    componentDidUpdate() {
        console.log('123213123')
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        router: state.router.location.pathname
    }
}

export default Test