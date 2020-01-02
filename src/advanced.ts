// 基础类型推断
let a = 1 // 推断为number
let b = [] // 推断为以any类型为元素的数组
let b2 = [1] // 推断为以number类型为元素的数组

let c = (x = 1) => x+1

// 从左到有的类型推断，即上下文类型推断
window.onkeydown = event => {
  // console.log(event.button)
}

// 类型断言
interface Foo {
  bar: number
}
// let foo = {} as Foo
// foo.bar = 1
let foo: Foo = {
  bar: 1
}