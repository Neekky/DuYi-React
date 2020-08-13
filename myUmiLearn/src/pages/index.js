import React from 'react'
import { getAllStudents } from '../services/student'

export default function index() {
    getAllStudents().then(res => console.log(res))
    return (
        <div>
            <h1>首页</h1>
        </div>
    )
}
