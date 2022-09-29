import Taro from '@tarojs/taro'
import {Block} from '@tarojs/components'
import Comp from '../../subpackages/components/com'

interface Props {
  payload: {
    type: string,
    data: Record<string, any>
  }
  [p: string]: unknown
}

const Aggregation: Taro.FC<Props> = ({payload: {type, data={}}={}}) => {
  return (
    <Block>
      {/*// @ts-ignore*/}
      {type === 'comp' && <Comp {...data}/>}
    </Block>
  )
}

Aggregation.config = {
  // @ts-ignore
  componentPlaceholder: {
    comp: 'skeleton'
  },
  usingComponents: {
    // skeleton: './skeleton',
    skeleton: './raw/skeleton',
  }
}

export default Aggregation
