import Taro, {useState, useEffect, } from '@tarojs/taro'
import {View} from '@tarojs/components'

interface Props {
  [p: string]: unknown
}

const Skeleton: Taro.FC<Props> = () => {
  return (
    <View className="skeleton">
    </View>
  )
}

Skeleton.options = {
  styleIsolation: "apply-shared"
}

export default Skeleton
