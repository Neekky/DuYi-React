import React from 'react'
import "./Pager.css"
/**
 * 分页组件
 * 属性：
 * 1.current 初始页码
 * 2.total 总数据量
 * 3.limit 页容量，每页显示数据量
 * 4.panelNumber：数字页码最多显示多少个
 */
export default function Pager(props) {
  const pageNumber = getPageNumber(props); // 总页数
  if (pageNumber === 0){
    return null;
  }
  const min = getMinNumber(pageNumber, props); // 最小数字
  const max = getMaxNumber(min, pageNumber, props); // 最大数字
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(<span key={i} onClick={() => { toPage(i, props) }} className={i === props.current?"item active":"item"}>{i}</span>)
  }
  return (
    <>
      <span onClick={() => { toPage(1, props) }} className={props.current === 1 ? "item disabled" : "item"}>首页</span>
      <span
        onClick={() => { toPage(props.current - 1 < 1 ? 1 : props.current - 1, props) }}
        className={props.current === 1 ? "item disabled" : "item"}>
        上一页</span>
      {/* 数字页码 */}
      {numbers}

      <span
        onClick={() => { toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props) }}
        className={props.current === pageNumber ? "item disabled" : "item"}>下一页</span>
      <span onClick={() => { toPage(pageNumber, props) }} className={props.current === pageNumber ? "item disabled" : "item"}>尾页</span>

      {/* 页码显示 */}
      <span className="current">{props.current}</span>
      /
      <span>{pageNumber}</span>
    </>
  );
}

function getMaxNumber(min, pageNumber, props) {
  let max = min + props.panelNumber - 1;
  if (max > pageNumber) {
    max = pageNumber
  }
  return max;
}

function getMinNumber(pageNumber, props) {
  let min = props.current - Math.floor(props.panelNumber / 2)
  if (min < 1) {
    min = 1;
  }
  if (min > pageNumber - props.panelNumber + 1) {
    min = pageNumber - props.panelNumber + 1
  }
  return min;
}

/**
 * 跳转到指定页码
 * @param {*} target 
 * @param {*} props 
 */
function toPage(target, props) {
  if (props.current === target) {
    return;
  }
  props.onPageChange && props.onPageChange(target);
}

/**
 * 计算总页数
 * @param {*} props 
 */
function getPageNumber(props) {
  return Math.ceil(props.total / props.limit);
}