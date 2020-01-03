// 基础类型推断
let a = 1 // 推断a为 number 类型
let b = [] // 推断b为以 any 类型为元素的数组
let b2 = [1] // 推断为以 number 类型为元素的数组
let b3 = [1, null] // 推断为 number 类型的数组

let c = (x = 1) => x+1 // 函数参数类型和返回值的推断

// 从左到有的类型推断，即上下文类型推断
window.onkeydown = (event:KeyboardEvent) => {
  // console.log(event.button)
}

// 类型断言：允许覆盖类型推断
interface Foo {
  bar: number
}
// let foo = {} as Foo
// foo.bar = 1
let foo: Foo = {
  bar: 1
}

// 类型兼容性
// X 兼容 Y：X（目标类型）=Y（源类型）
let s: string = 'a'
s = null // s兼容null类型

// 接口兼容性
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}

let xx: X = {a: 1, b: 2}
let y: Y = {a: 1, b: 2, c: 3}
xx = y // 成员少的会兼容成员多的

// 函数兼容性 通常在函数作为参数的情况下发生函数兼容性判断
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
  return handler
}
// 条件1：目标函数的参数个数要多于源函数参数个数
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c: number) => {}