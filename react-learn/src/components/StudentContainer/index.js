import React, { useState, useEffect } from 'react'
import StudentList from "../StudentList"
import { getStudents } from "../../services/student"
import Pager from "../common/"

export default function StudentContainer() {
  const [students, setStudents] = useState([])
  const [Page, setPage] = useState(1)
  useEffect(() => {
    (async function () {
      const resp = await getStudents(Page,10);
      setStudents(resp.findByPage);
      console.log(resp)
    })()
  }, [Page])
  return (
    <div>
      <StudentList stus={students} />
      <input type="number" value={Page} onChange={(e)=>{
        setPage(parseInt(e.target.value))
      }} />
    </div>
  )
}
