import $ from 'jquery'

$('.app').css('color', 'red')
// 调用全局类库
globalLib({x: 1})
globalLib.doSomething()

// 引入模块类库
import moduleLib from './module-lib'
moduleLib.doSomething()

// 引入UMD库
import umdLib from './umd-lib'
umdLib.doSomething() // 也可以通过全局引入

// 给外部类库增加自定义方法
import m from 'moment'
declare module 'moment' {
  export function myFunction(): void
}
m.myFunction = () => {}

// 给全局变量增加一些方法（全局插件）
declare global {
  namespace globalLib {
    function doAnything(): void
  }
}
globalLib.doAnything = () => {}
