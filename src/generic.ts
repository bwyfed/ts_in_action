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
