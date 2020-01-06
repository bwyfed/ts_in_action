// 函数定义的4种方式

function add_1(x: number, y: number) {
  return x + y
}
// 通过变量定义一个函数类型
let add_2: (x: number, y: number) => number
// 通过类型别名来定义一个函数类型
type add_3 = (x: number, y: number) => number

interface add_4 {
  (x: number, y: number): number
}

// 函数调用时形参和实参是一一对应的
// add_1(1, 2)

// 可选参数--必须位于必选参数之后
function add_5(x: number, y?: number) {
  return y ? x+y: x
}
add_5(1)

// 为参数提供一个默认值
function add_6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}

console.log(add_6(1, undefined, 3))

// 不定参数
function add_7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}

console.log(add_7(1, 2 , 3, 4, 5))

// 函数重载
function add_8(...rest: number[]): number
function add_8(...rest: string[]): string
function add_8(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}
console.log(add_8(1,2,3))
console.log(add_8('a', 'b', 'c'))