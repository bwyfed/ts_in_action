// 数字枚举类型
enum Role {
  Reporter = 1, // 默认从0开始，可以自定义开始数字
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter)
console.log(Role) // 被编译为对象了

// 字符串枚举
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

// 异构枚举--数字枚举和字符串枚举混用
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员是只读类型，不能修改
// Role.Reporter = 2
// 枚举成员的类型
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // computed--不会在编译阶段计算，会在运行时被计算
  d = Math.random(),
  e = '123'.length,
  f = 4
}

// 常量枚举--会在编译阶段被移除
const enum Month {
  Jan,
  Feb,
  Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E {a, b}
enum F {a = 0, b = 1}
enum G {a = 'apple', b='banana'}

let e: E = 3
let f: F = 3
// e === f // 报错
let e1: E.a = 1
let e2: E.b
// e1 === e2 // 报错
let e3: E.a = 1
e1 === e3

let g1: G = G.b
let g2: G.a = G.a