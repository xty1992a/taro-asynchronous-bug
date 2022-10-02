import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/other'
import './lib/propsManager'

import './app.less'

class App extends Component {
  config: Config = {
    pages: [
      'pages/other/index',
    ],
    subPackages: [
      /** 移除此分包即可正常 */
      {
        "root": "subpackages/components",
        "pages": [
          "index"
        ]
      }
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
