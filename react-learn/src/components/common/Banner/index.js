import React, { Component } from 'react'
import "./index.css"
import PropTypes from "prop-types"
import ImgContainer from "./ImgContainer"
import SwitchArrow from "./SwitchArrow"
import SwitchDot from "./SwitchDot"

export default class Banner extends Component {

  static defaultProps = {
    width: 520,
    height: 280,
    imgSrcs: [],
    autoDuration: 3000,
    duration: 500,
  }

  static propTypes = {
    width: PropTypes.number.isRequired, // 容器宽度
    height: PropTypes.number.isRequired, // 容器高度
    imgSrcs: PropTypes.arrayOf(PropTypes.string), // 图片路径数组
    autoDuration: PropTypes.number.isRequired, // 字段切换间隔时间
    duration: PropTypes.number.isRequired, // 完成一次切换所需要的时间
  }

  timer = null; // 自动切换的计时器

  componentDidMount() {
    this.autoSwitch();
  }

  state = {
    curIndex: 0, // 当前显示的第几张图片
  }

  autoSwitch() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      let cur = this.state.curIndex;
      cur = (cur + 1) % this.props.imgSrcs.length;
      this.handleSwitch(cur);
    },this.props.autoDuration)
  }

  imgContainerRef = el => {
    this.imgContainer = el;
  }

  handleArrowChange = type => {
    let cur = this.state.curIndex;
    if (type === "left") {
      cur--;
      if (cur < 0) {
        cur = this.props.imgSrcs.length - 1;
      }
    } else {
      cur++;
      if (cur > this.props.imgSrcs.length - 1) {
        cur = 0;
      }
    }
    this.handleSwitch(cur)
  }

  /**
   * 处理图片切换
   */
  handleSwitch = index => {
    this.setState({
      curIndex:index
    })
    // 得到ImgContainer的组件对象
    this.imgContainer.switchTo(index);
  }

  render() {
    return (
      <>
        <div
          className="banner-container"
          style={{
            width: this.props.width,
            height: this.props.height
          }}
          onMouseEnter={()=>{
            clearInterval(this.timer)
          }}
          onMouseLeave={()=>{
            this.autoSwitch()
          }}
          >
          <ImgContainer
            ref={this.imgContainerRef}
            imgSrcs={this.props.imgSrcs}
            imgWidth={this.props.width}
            imgHeight={this.props.height}
            duration={this.props.duration}
          />
          <SwitchArrow
            onChange={this.handleArrowChange}
          ></SwitchArrow>
          <SwitchDot
            total={this.props.imgSrcs.length}
            curIndex={this.state.curIndex}
            onChange={this.handleSwitch}
          ></SwitchDot>
        </div>
        <button
          onClick={() => {
            this.handleSwitch(3)
          }}>
          切换图片
        </button>
      </>
    )
  }
}
