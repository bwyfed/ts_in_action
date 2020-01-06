interface A {
  x: number;
  // y: string;
  foo(bar: number): number; // 3
  foo(bar: 'a'): number; // 02
}
interface A {
  y: number;
  // 函数重载声明
  foo(bar: string): string; // 1
  foo(bar: number[]): number; // 2
  foo(bar: 'b'): number; // 01
}

let aMerge: A = {
  x: 1,
  y: 2,
  foo(bar: any) {
    return bar
  }
}
// 函数和命名空间的合并
function Lib() {}
namespace Lib {
  export let version = '1.0' // 相当于给函数增加一个属性
}
console.log(Lib.version)
// 类和命名空间的合并
class CC {}
namespace CC {
  export let state = 1 // 给类添加了一些静态的属性
}
console.log(CC.state)

// 枚举和命名空间的合并
enum Color {
  Red,
  Yellow,
  Blue
}
namespace Color {
  export function mix() {}
}
console.log(Color)