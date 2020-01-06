// 原始类型
let bool : boolean = true
let num : number | undefined | null = 123 // 联合类型
let str: string = 'abc'

// 数组
// arr1 和 arr2是等价的
let arr1: number[] = [1, 2 , 3]
let arr2: Array<number> = [1, 2, 3];
let arr3: Array<number | string> = [1, 2 , 3, '4'] // 联合类型

// 元组：特殊的数组，限定了元素的类型和个数
let tuple: [number, string] = [0, '1']
// 实际开发中，不建议对元组增加元素
// tuple.push(2) // 元组越界，编译器未报错
// console.log(tuple) // [0, "1", 2]
// 但是不能访问 如：tuple[2]

// 函数
let add = (x:number, y:number): number => x + y
let compute: (x: number, y: number) => number // 函数类型，没有具体实现
compute = (a, b) => a + b;

// 对象
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 3

// Symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)

// undefined, null
let un: undefined = undefined
let nu: null = null
// num = undefined // 设置 "strictNullChecks": false
num = undefined
num = null

// void 没有任何返回值的函数
let noReturn = () => {}

// any
let x
x = 1
x = []
x = () => {}

// never 永远不会有返回值的类型
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while(true) {}
}