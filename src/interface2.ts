// 用一个变量来定义函数类型
// let add: (x:number, y: number) => number
// 用接口定义函数
// interface Add {
//   (x: number, y: number): number
// }
// 使用类型别名来定义函数，使用 type 关键字
// 为函数类型起个名字
type Add = (x: number, y: number) => number
// 使用函数类型定义一个函数
let add_: Add = (a, b) => a+b

// 混合类型的接口--定了函数和对象
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}
// 实现这个接口
function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = '1.0'
  lib.doSomething = () => {}
  return lib
}
let lib1 = getLib()
lib1()
lib1.doSomething()
// 再创建一个接口的实例
let lib2 = getLib()
