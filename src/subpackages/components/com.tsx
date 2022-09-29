import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'

interface Props {
  date: string
  [p: string]: unknown
}

const Comp: Taro.FC<Props> = (props) => {
  return (
    <View>组件 {props.date}</View>
  )
}

export default Comp
