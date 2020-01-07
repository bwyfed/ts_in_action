class A {
  a: number = 1
}
// 解构赋值
let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4}
// 扩展运算符
let n = {x, y, ...z}
// 引入类型检查
// n=1
// 不能编译的类型
// 1.命名空间
// namespace N {
//   export const n = 1
// }
// 2.类型断言的写法
let s = {} as A
s.a = 1
// 3.常量枚举
// const enum E { A }
// 4.默认导出
// export = s

