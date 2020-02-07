import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class ImgContainer extends Component {

  static propTypes = {
    imgSrcs: PropTypes.arrayOf(PropTypes.string),
    imgWidth: PropTypes.number.isRequired, //单张图片宽度
    imgHeight: PropTypes.number.isRequired, //单张图片高度
    duration: PropTypes.number.isRequired, //在多长时间内完成切换
  }

  state = {
    marginLeft: 0
  }


  containerRef = el => {
    this.div = el;
  }

  tick = 16 // 计时器间隔时间

  timer = null // 计时器序号

  /**
   * 切换到第几张图片
   * 调用该函数，此组件会经过一段动画完成切换
   * @param {*} index 图片下标，从0开始
   */
  switchTo(index) {
    // 设置正确的index
    if (index < 0) {
      index = 0;
    } else if (index > this.props.imgSrcs.length - 1) {
      index = this.props.imgSrcs.length - 1;
    }
    // 根据index，计算div最终的marginLeft
    const targetLeft = -index * this.props.imgWidth;
    // 得到当前的marginLeft
    let curLeft = parseFloat(getComputedStyle(this.div).marginLeft);
    // 计算运动的次数
    const times = Math.ceil(this.props.duration / this.tick);
    let curTimes = 0; // 当前运动的次数
    // 计算每次运动的距离
    const totalDis = targetLeft - curLeft; // 总距离
    const dis = totalDis / times; // 每次运动的距离
    // 先停止之前的动画
    clearInterval(this.timer);
    this.timer = setInterval(()=>{
      curTimes++ 
      curLeft += dis;
      this.div.style.marginLeft = curLeft + "px";
      if(curTimes === times) {
        this.div.style.marginLeft = targetLeft + "px";
        clearInterval(this.timer);
      }
    },this.tick)
  }

  render() {
    const imgs = this.props.imgSrcs.map((src, i) => (
      <img
        style={{
          width: this.props.imgWidth,
          height: this.props.imgHeight,
          float: "left"
        }}
        key={i}
        src={src}
        alt=""
      ></img>
    ))
    return (
      <div
        ref={this.containerRef}
        style={{
          width: this.props.imgSrcs.length * this.props.imgWidth,
          height: this.props.imgHeight,
          marginLeft: this.state.marginLeft
        }}>
        {imgs}
      </div>
    )
  }
}
