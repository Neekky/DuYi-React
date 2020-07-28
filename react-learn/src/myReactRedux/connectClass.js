import React from "react";
import ctx from "./ctx";
import { bindActionCreators } from "redux";

export default function (mapStateToProps, mapDispatchToProps) {
    /**
     * 返回一个高阶组件
     */
    return function (Comp) {
        // 对于Temp组件，只有它需要的数据发生变化时才会重新渲染
        class Temp extends React.PureComponent {

            static contextType = ctx;

            constructor(props, context) {
                super(props, context);
                this._store = this.context;
                // 映射store至组件属性
                if (mapStateToProps) {
                    this.state = mapStateToProps(this._store.getState(), this.props);
                    this._unlisten = this._store.subscribe(() => {
                        this.setState(mapStateToProps(this._store.getState(), this.props));
                    })
                }

                // 映射dispatch至组件属性
                if (mapDispatchToProps) {
                    this._handlers = this.getEventHandlers();
                }
            }

            componentWillUnmount() {
                // 卸载组件时，取消监听
                if (this._unlisten) {
                    this._unlisten()
                }
            }

            // 得到事件处理属性
            getEventHandlers() {
                if (typeof mapDispatchToProps === "function") {
                    return mapDispatchToProps(this._store.dispatch, this.props);
                } else if (typeof mapDispatchToProps === "object") {
                    return bindActionCreators(mapDispatchToProps, this._store.dispatch);
                }
            }

            render() {
                console.log(`${Temp.displayName}重新渲染了`)
                return (
                    <Comp {...this.state} {...this._handlers} {...this.props} />
                )
            }
        }
        Temp.displayName = Comp.displayName || Comp.name;
        return Temp;
    }
}