import Taro, {useState, useEffect, } from '@tarojs/taro'
import {View} from '@tarojs/components'
import Aggregation from './aggregation'

interface Props {
  [p: string]: unknown
}

const Other: Taro.FC<Props> = () => {
  const [list, setList] = useState<any[]>([])

  useEffect(() => {
    setInterval(() => {
      setList([{type: 'comp', data: {date: new Date().toLocaleString()}}])
    }, 1000)
  }, [])
  return (
    <View>
      <View>页面</View>
      <View>本地展开</View>
      {
        list.map(it => (<View key={it.type}>{it.type}: {it.data.date}</View>))
      }

      <View>子组件展开</View>
      {
        list.map(it => (<Aggregation key={it.type} payload={it} />))
      }
    </View>
  )
}

export default Other
