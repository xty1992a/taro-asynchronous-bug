/*
* 劫持taro的propsManager，使得原生组件也可以从中取得props
* */
import Taro from '@tarojs/taro'
// @ts-ignore
const propsManager = Taro.propsManager
const observers = {}
const old = propsManager.set

function fakeSet(props, id, prevProps) {
  try{
    observers[id] && observers[id].forEach(fn => fn(props, prevProps))
  }catch (e) {}
  return old.call(this, props, id, prevProps)
}
propsManager.set = fakeSet.bind(propsManager)

/**
 * 加监听
 * */
export function register(compid, listener) {
  (observers[compid] || (observers[compid] = [])).push(listener)
}

/**
 * 删除某个监听器
 * */
export function unregister(compid, listener) {
  const list = observers[compid]
  if (!list) return
  observers[compid] = list.filter(fn => fn !== listener)
}

/**
 * 完全清理某个监听器
 * */
export function clear(compid) {
  delete observers[compid]
}
