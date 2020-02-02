import React from 'react'
import ValidationComp, { A } from "./ValidationComp"
import CheckBoxGroup from "./components/common/CheckBoxGroup/Test"
import Comp from "./Comp"
// import Demo from "./Demo"
export default function App() {
    return (
        <div>
            <CheckBoxGroup></CheckBoxGroup>
            <ValidationComp
                a={2}
                d={<Comp />}
                e={<Comp />}
                F={Comp}
                g={new A()}
                sex="男"
                h={[2, 3]}
                i={{
                    a: 2
                }}
                j={{
                    a: 3,
                    name: "abc",
                    age: 233,
                    address: {
                        province: "asdfa",
                        city: "adsfasdf"
                    }
                }}
                k={[{name:"asdf", age:33}]}
                m={23}
                score={33}
            />
            <Comp></Comp>
        </div>
    )
}