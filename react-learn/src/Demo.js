import React, { Component } from 'react'
import "./Demo.css"

export default class Demo extends Component {
  state = {
    scrollTabBar: "",
    ScreenWidth: window.screen.width, //屏幕宽度
    direction: "", //变换方向
    tabs: [
      {
        name: "关注"
      },
      {
        name: "推荐"
      },
      {
        name: "附近"
      },
      {
        name: "玩新鲜"
      },
      {
        name: "大自然"
      },
      {
        name: "亲子餐"
      },
      {
        name: "启蒙课"
      },
      {
        name: "周边游"
      },
      {
        name: "去度假"
      },
      {
        name: "晒萌娃"
      },
      {
        name: "益智玩"
      },
      {
        name: "身体棒"
      }
    ],
    curTab: 0
  }
  componentDidMount() {
  }
  componentDidUpdate() {
    const tabItem = document.getElementsByClassName("active")[0];
    const tabBar = document.getElementsByClassName("tab-bar")[0];
    const maxItem = [].slice.call(document.getElementsByClassName("tab-item"),-1)[0];
    let maxLiLeft = maxItem.offsetLeft;
    let maxLiWidth = maxItem.offsetWidth;

    let liLeft = tabItem.offsetLeft;
    let liWidth = tabItem.offsetWidth / 2;
    let widths = this.state.ScreenWidth / 2;

    let scrollDistance = liLeft + liWidth - widths;
    let maxWidth = maxLiLeft + (maxLiWidth*3/2) - (widths*2);
    console.log({maxLiLeft,maxLiWidth,widths,maxWidth})
    if (scrollDistance < 0) {
      scrollDistance = 0
    }
    //  else if (scrollDistance > maxWidth) {
    //   scrollDistance = maxWidth
    // }
    let timer = setInterval(() => {
      if (this.state.direction === "left") {
        tabBar.scrollLeft -= 5
        if (tabBar.scrollLeft <= scrollDistance) {
          tabBar.scrollLeft = scrollDistance
          clearInterval(timer)
        }
      } else {
        tabBar.scrollLeft += 5
        if (tabBar.scrollLeft >= scrollDistance) {
          tabBar.scrollLeft = scrollDistance
          clearInterval(timer)
        }
      }
    }, 5)
  }
  handleChange = (index, e) => {
    // if (this.state.curTab === index) {
    //   return
    // }
    const tabBar = document.getElementsByClassName("tab-bar")[0];

    console.log(e.target.offsetLeft,tabBar.pageXOffset)
    this.setState(state => {
      let direction = state.curTab > index ? "left" : "right";
      return {
        curTab: index,
        direction
      }
    })
  }
  render() {
    let { curTab } = this.state;
    return (
      <div className="wrapper">
        <ul className="tab-bar">
          {
            this.state.tabs.map((item, index) => (
              <li
                key={item.name}
                onClick={e => { this.handleChange(index, e); }}
                className={index === curTab ? "tab-item active" : "tab-item"}>
                <span className="tab-text">{item.name}</span>
                <span className="tab-bottom"></span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
