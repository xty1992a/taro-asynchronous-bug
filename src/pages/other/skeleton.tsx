import Taro, {useState, useEffect,useScope } from '@tarojs/taro'
import {View} from '@tarojs/components'

interface Props {
  [p: string]: unknown
}

const Skeleton: Taro.FC<Props> = (props) => {
  const scope = useScope()

  useEffect(() => {
    // 删除小程序组件实例的compid，使清理propsManager时，不会命中。
    // 避免误删被本组件占位的组件注册的observer
     scope.data.compid = undefined
  }, [])

  return (
    <View className="skeleton">
    </View>
  )
}

Skeleton.options = {
  styleIsolation: "apply-shared"
}

export default Skeleton
