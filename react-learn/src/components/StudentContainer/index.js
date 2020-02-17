import React, { useState, useEffect } from 'react'
import StudentList from "../StudentList"
import { getStudents } from "../../services/student"
import Pager from "../common/Pager"

export default function StudentContainer() {
  const [students, setStudents] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [total, setTotal] = useState(0)
  const [panelNumber, setPanelNumber] = useState(5)
  useEffect(() => {
    (async function () {
      const resp = await getStudents(page,limit);
      setStudents(resp.findByPage);
      setTotal(resp.cont);
    })()
  }, [page,limit])
  return (
    <div>
      <StudentList stus={students} />
      <Pager 
        current={page} 
        limit={limit}
        total={total}
        panelNumber={panelNumber}
        onPageChange={(target)=>{
          setPage(target)
        }}
      />
    </div>
  )
}
