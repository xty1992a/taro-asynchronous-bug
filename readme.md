### 简述
taro2在开启分包异步化时，如果指定的占位元素同样是taro组件时。  
被占位元素，无法更新props

### 复现
运行代码构建即可。

#### 修复问题
1. 关闭分包异步化即可，即删除`app.tsx`中的`subpackages/components`分包即可。
2. 替换`aggregation.tsx`组件的占位元素为`./raw/skeleton`即可。  
3. 切换到[f-hack-fix](https://github.com/xty1992a/taro-asynchronous-bug/tree/f-hack-fix)分支
