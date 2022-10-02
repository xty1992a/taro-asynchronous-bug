import * as propsManager from '../../../lib/propsManager'
// subpackages/raw/skeleton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	compid: {
	  type: String,
	  value: '',
	  observer(now, old) {
		// 通过劫持过的propsManager从taro体系中取值
		propsManager.clear(old)
		propsManager.register(now, (props, prevProps) => {
		  console.log('new props',props)
		})
	  }
	}
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  options: {
	styleIsolation: 'apply-shared'
  }
})
