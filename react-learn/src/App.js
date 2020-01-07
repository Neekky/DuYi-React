import React from 'react'
import ThreeLayout from "./components/ThreeLayout"

export default function App() {
  return (
    <div>
      <ThreeLayout
        left={<h1>
          左区域怎么样
      </h1>}
        right={<h1>
          右区域怎么样
    </h1>}>
        <h1>主区域</h1>
        <p>无法和你继续玩耍</p>
      </ThreeLayout>
    </div>
  )
}
