import React, {useEffect} from 'react'
import StudentSearchBar from "./StudentSearchBar";
import StudentTable from "./StudentTable";
// import { connect } from "react-redux";
import { connect } from "../myReactRedux";
import { change as changeCondition } from "../store/action/student/searchCondition"
import { fetchStudents } from "../store/action/student/searchResult"
import Pager from "../components/common/Pager"
import store from "../store"

let mapStateToProps = state => ({
    defaultValue: {
        key: state.students.condition.key,
        sex: state.students.condition.sex,
    }
});

let mapDispatchToProps = dispatch => ({
    onSearch: (newCondition) => {
        newCondition.page = 1;
        // 重新设置条件
        dispatch(changeCondition(newCondition));
        // 触发获取学生数据的action
        dispatch(fetchStudents());
    }
})

// 连接数据和处理函数之后，得到一个新的组件。
const SearchBar = connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar)

mapStateToProps = state => ({
    stus: state.students.result.datas
});

// 连接 StudentTable
const PageStudentTable = connect(mapStateToProps)(StudentTable);

// 连接 Pager
mapStateToProps = state => ({
    current: state.students.condition.page,
    total: state.students.result.total,
    limit: state.students.condition.limit,
})

mapDispatchToProps = dispatch => ({
    onPageChange: (target) => {
        dispatch(changeCondition({ page: target }));
        // 触发获取学生数据的action
        dispatch(fetchStudents());
    }
})

const PagePager = connect(mapStateToProps, mapDispatchToProps)(Pager);


export default function StudentSearch() {
    useEffect(()=>{
        store.dispatch(fetchStudents())
    })
    return <>
        <SearchBar></SearchBar>
        <PageStudentTable></PageStudentTable>
        <PagePager></PagePager>
    </>
}