import React, { Component } from 'react';
import types from "../../../utils/commonTypes";
import PropTypes from "prop-types";
import withDataGroup from "../hoc/withDataGroup";

class Radio extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        info: types.singleData.isRequired, // 当前单选框的value
        onChange: PropTypes.func,
        value: PropTypes.string.isRequired // 当前选中的value值
    }
    render() {
        return (
            <label key={this.props.info.value}>
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.info.value}
                    checked={this.props.value === this.props.info.value}
                    onChange={() => {
                        this.props.onChange && this.props.onChange(this.props.info.value)
                    }}
                />
                {this.props.info.text}
            </label>
        )
    }
}

export default withDataGroup(Radio);

// /**
//  * 一组单选框
//  */
// export default class RadioBoxGroup extends Component {

//     /**
//      * 默认属性值
//      */
//     static defaulProps = {
//         datas: [],
//         value: ""
//     }

//     static propTypes = {
//         datas: types.groupDatas.isRequired,
//         name: PropTypes.string.isRequired,
//         value: PropTypes.string.isRequired,
//         onChange: PropTypes.func
//     }

//     handleChange = e => {
//         this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
//     }

//     /**
//      * 得到一组单选框
//      */
//     getRadios() {
//         return this.props.datas.map(it => (
//             <label key={it.value}>
//                 <input
//                     type="radio"
//                     name={this.props.name}
//                     value={it.value}
//                     checked={this.props.value === it.value}
//                     onChange={this.handleChange}
//                 />
//                 {it.text}
//             </label>
//         ));
//     }

//     render() {
//         const bs = this.getRadios();
//         return (
//             <div>
//                 {bs}
//             </div>
//         )
//     }
// }
