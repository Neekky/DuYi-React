import React, { useContext, useState, useEffect } from "react";
import ctx from "./ctx";
import { bindActionCreators } from "redux";

function compare(obj1, obj2) {
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

export default function (mapStateToProps, mapDispatchToProps) {
    /**
     * 返回一个高阶组件
     */
    return function (Comp) {
        // 对于Temp组件，只有它需要的数据发生变化时才会重新渲染
        function Temp(props) {
            const store = useContext(ctx);

            const [state, setState] = useState((mapStateToProps && mapStateToProps(store.getState(), props)) || {});

            useEffect(() => {
                const unListen = store.subscribe(() => {
                    let newState = mapStateToProps && mapStateToProps(store.getState(), props)
                    setState(prevState => {
                        if (!compare(prevState, newState)) {
                            return newState;
                        } else {
                            return prevState;
                        }
                    })
                })
                // 这个取消监听函数，在该副作用函数中，将只会在组件被销毁时运行。
                return unListen;
            }, [store])

            // 得到事件处理属性
            function getEventHandlers() {
                if (typeof mapDispatchToProps === "function") {
                    return mapDispatchToProps(store.dispatch, props);
                } else if (typeof mapDispatchToProps === "object") {
                    return bindActionCreators(mapDispatchToProps, store.dispatch);
                }
            }

            let handlers = {};
            if (mapDispatchToProps) {
                handlers = getEventHandlers()
            }

            return <Comp {...state} {...handlers} {...props} />
        }
        Temp.displayName = Comp.displayName || Comp.name;
        return Temp;
    }
}