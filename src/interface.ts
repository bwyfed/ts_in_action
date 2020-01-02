interface List {
  readonly id: number; // 只读属性
  name: string;
  // [x: string]: any; // 字符串签名
  age?: number // 可选属性，后面加上?
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
    // value.id++ // 只读属性不允许修改
  })
}
// 鸭式辩型法
let result = {
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B', age: 10}
  ]
}
render(result)
// 如果直接传入一个对象字面量，则会检查每个字段，多余的字段报错
render({
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B'}
  ]
} as Result)
// 数字索引类型的接口
interface StringArray {
  [index: number]: string
}
let chars: StringArray = ['A', 'B']
// 字符串索引类型的接口
interface Names {
  [x: string]: string;
  [z: number]: string // 混用方式
}