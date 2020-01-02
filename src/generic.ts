/**
function log<T>(value: T): T {
  console.log(value)
  return value
}

log<string[]>(['a', 'b'])
log(['a', 'b']) // 类型推断

// 使用类型别名定义一个函数类型
// type Log = <T>(value: T) => T
// let myLog: Log = log // 泛型函数的实现

// 泛型接口的定义
// interface Log<T> {
//   (value: T): T
// }
// let myLog: Log<number> = log
// myLog(1)
interface Log<T = string> {
  (value: T): T
}
let myLog: Log = log
myLog('1')
*/

class Log<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}
let log1 = new Log<number>()
log1.run(1)
let log2 = new Log()
log2.run({a: 1})
log2.run('1')

// 泛型约束
interface Length {
  length: number
}
// T继承了Length接口，T受到了约束，输入的参数必须具有length属性
function log<T extends Length>(value: T): T {
  console.log(value, value.length)
  return value
}
log([1])
log('123')
log({length: 1})

// 泛型的好处
// 1. 函数和类可以轻松地支持多种类型，增强程序的扩展性
// 2. 不必写多条函数重载，冗长的联合类型声明，增强代码的可读性
// 3. 灵活控制类型之间的约束
